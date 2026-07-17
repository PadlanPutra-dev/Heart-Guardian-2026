const pool = require('../config/database');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const ML_API_URL = process.env.ML_API_URL || 'http://localhost:8000';

// Send raw signal to ML API
exports.predictFromSignal = async (req, res) => {
  try {
    const { patientId } = req.params;
    const { signal, fs: samplingRate } = req.body;

    if (!signal || !Array.isArray(signal)) {
      return res.status(400).json({ error: 'Invalid signal data' });
    }

    if (signal.length < samplingRate * 0.4) {
      return res.status(400).json({ error: 'Signal too short (min 0.4 seconds)' });
    }

    // Call ML API
    const mlResponse = await axios.post(`${ML_API_URL}/predict`, {
      signal,
      fs: samplingRate || 360
    }, { timeout: 30000 });

    const prediction = mlResponse.data;

    // Try to save to database, but don't fail if DB unavailable
    let predictionRecord = {
      id: Math.random().toString(36).substr(2, 9),
      ecg_signal_id: null,
      patient_id: patientId,
      arrhythmia_label: prediction.beats?.[0]?.arrhythmia_label || null,
      arrhythmia_class: prediction.beats?.[0]?.arrhythmia_class || 'UNKNOWN',
      infarction_prob: prediction.detail?.max_infarction_prob || 0,
      beats_detected: prediction.beats?.length || 0,
      emergency_level: prediction.emergency_level,
      message: prediction.message
    };

    try {
      // Save signal to database
      const signalBuffer = Buffer.from(JSON.stringify(signal));
      const signalResult = await pool.query(
        `INSERT INTO ecg_signals (patient_id, signal_data, sampling_rate, num_samples, file_name)
         VALUES ($1, $2, $3, $4, $5) RETURNING id`,
        [patientId, signalBuffer, samplingRate || 360, signal.length, `signal_${Date.now()}.json`]
      );

      const ecgSignalId = signalResult.rows[0].id;

      // Save prediction to database
      const predResult = await pool.query(
        `INSERT INTO predictions 
         (ecg_signal_id, patient_id, arrhythmia_label, arrhythmia_class, infarction_prob, 
          beats_detected, emergency_level, message)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
         RETURNING *`,
        [
          ecgSignalId,
          patientId,
          prediction.beats?.[0]?.arrhythmia_label || null,
          prediction.beats?.[0]?.arrhythmia_class || 'UNKNOWN',
          prediction.detail?.max_infarction_prob || 0,
          prediction.beats?.length || 0,
          prediction.emergency_level,
          prediction.message
        ]
      );

      predictionRecord = predResult.rows[0];

      // Create emergency alert if critical
      if (prediction.emergency_level >= 2) {
        await pool.query(
          `INSERT INTO emergency_alerts (patient_id, prediction_id, alert_level, alert_type)
           VALUES ($1, $2, $3, $4)`,
          [patientId, predictionRecord.id, prediction.emergency_level, 'ARRHYTHMIA_DETECTED']
        );
      }
    } catch (dbError) {
      console.warn('Database error (continuing without DB):', dbError.message);
      // Continue with in-memory prediction object
    }

    res.json({
      success: true,
      prediction: predictionRecord,
      mlData: prediction
    });

  } catch (error) {
    console.error('Prediction error:', error.message);
    res.status(500).json({ 
      error: 'Prediction failed',
      details: error.message 
    });
  }
};

// Upload ECG file and predict
exports.predictFromFile = async (req, res) => {
  try {
    const { patientId } = req.params;
    
    if (!req.files || !req.files.heaFile || !req.files.datFile) {
      return res.status(400).json({ error: 'Both .hea and .dat files required' });
    }

    const heaFile = req.files.heaFile;
    const datFile = req.files.datFile;
    const fs = req.body.fs || 360;

    // Create FormData for ML API
    const FormData = require('form-data');
    const form = new FormData();
    
    form.append('hea_file', heaFile.data, heaFile.name);
    form.append('dat_file', datFile.data, datFile.name);
    form.append('fs', fs);

    // Call ML API
    const mlResponse = await axios.post(
      `${ML_API_URL}/predict_file`,
      form,
      {
        headers: form.getHeaders(),
        timeout: 30000
      }
    );

    const prediction = mlResponse.data;

    // Try to save to database, but don't fail if DB unavailable
    let predictionRecord = {
      id: Math.random().toString(36).substr(2, 9),
      ecg_signal_id: null,
      patient_id: patientId,
      arrhythmia_label: prediction.beats?.[0]?.arrhythmia_label || null,
      arrhythmia_class: prediction.beats?.[0]?.arrhythmia_class || 'UNKNOWN',
      infarction_prob: prediction.detail?.max_infarction_prob || 0,
      beats_detected: prediction.beats?.length || 0,
      emergency_level: prediction.emergency_level,
      message: prediction.message
    };

    try {
      // Save file data to database
      const signalResult = await pool.query(
        `INSERT INTO ecg_signals (patient_id, signal_data, sampling_rate, num_samples, file_name)
         VALUES ($1, $2, $3, $4, $5) RETURNING id`,
        [patientId, heaFile.data, fs, null, heaFile.name]
      );

      const ecgSignalId = signalResult.rows[0].id;

      // Save prediction
      const predResult = await pool.query(
        `INSERT INTO predictions 
         (ecg_signal_id, patient_id, arrhythmia_label, arrhythmia_class, infarction_prob, 
          beats_detected, emergency_level, message)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
         RETURNING *`,
        [
          ecgSignalId,
          patientId,
          prediction.beats?.[0]?.arrhythmia_label || null,
          prediction.beats?.[0]?.arrhythmia_class || 'UNKNOWN',
          prediction.detail?.max_infarction_prob || 0,
          prediction.beats?.length || 0,
          prediction.emergency_level,
          prediction.message
        ]
      );

      predictionRecord = predResult.rows[0];

      // Create emergency alert if critical
      if (prediction.emergency_level >= 2) {
        await pool.query(
          `INSERT INTO emergency_alerts (patient_id, prediction_id, alert_level, alert_type)
           VALUES ($1, $2, $3, $4)`,
          [patientId, predictionRecord.id, prediction.emergency_level, 'ARRHYTHMIA_DETECTED']
        );
      }
    } catch (dbError) {
      console.warn('Database error (continuing without DB):', dbError.message);
      // Continue with in-memory prediction object
    }

    res.json({
      success: true,
      prediction: predictionRecord,
      mlData: prediction
    });

  } catch (error) {
    console.error('File prediction error:', error.message);
    res.status(500).json({ 
      error: 'File prediction failed',
      details: error.message 
    });
  }
};

// Get prediction history for patient
exports.getPredictionHistory = async (req, res) => {
  try {
    const { patientId } = req.params;
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const result = await pool.query(
      `SELECT * FROM predictions 
       WHERE patient_id = $1 
       ORDER BY created_at DESC 
       LIMIT $2 OFFSET $3`,
      [patientId, limit, offset]
    );

    res.json({
      success: true,
      predictions: result.rows,
      total: result.rows.length
    });

  } catch (error) {
    console.error('History error:', error.message);
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
};

// Get latest prediction for patient
exports.getLatestPrediction = async (req, res) => {
  try {
    const { patientId } = req.params;

    const result = await pool.query(
      `SELECT * FROM predictions 
       WHERE patient_id = $1 
       ORDER BY created_at DESC 
       LIMIT 1`,
      [patientId]
    );

    if (result.rows.length === 0) {
      return res.json({ success: true, prediction: null });
    }

    res.json({
      success: true,
      prediction: result.rows[0]
    });

  } catch (error) {
    console.error('Latest prediction error:', error.message);
    res.status(500).json({ error: 'Failed to retrieve latest prediction' });
  }
};

// Get emergency alerts
exports.getEmergencyAlerts = async (req, res) => {
  try {
    const { patientId } = req.params;
    const unresolved = req.query.unresolved === 'true';

    let query = `SELECT * FROM emergency_alerts WHERE patient_id = $1`;
    const params = [patientId];

    if (unresolved) {
      query += ` AND is_resolved = FALSE`;
    }

    query += ` ORDER BY created_at DESC LIMIT 20`;

    const result = await pool.query(query, params);

    res.json({
      success: true,
      alerts: result.rows
    });

  } catch (error) {
    console.error('Alerts error:', error.message);
    res.status(500).json({ error: 'Failed to retrieve alerts' });
  }
};

// Check ML API health
exports.mlApiHealth = async (req, res) => {
  try {
    const response = await axios.get(`${ML_API_URL}/health`, { timeout: 5000 });
    res.json({
      success: true,
      mlApiStatus: 'connected',
      mlData: response.data
    });
  } catch (error) {
    res.status(503).json({
      success: false,
      mlApiStatus: 'disconnected',
      error: 'ML API not available'
    });
  }
};
