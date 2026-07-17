const pool = require('./database');

async function initDatabase() {
  try {
    // Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role VARCHAR(50) DEFAULT 'patient',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // ECG Signals table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS ecg_signals (
        id SERIAL PRIMARY KEY,
        patient_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        signal_data BYTEA NOT NULL,
        sampling_rate INTEGER DEFAULT 360,
        num_samples INTEGER,
        file_name VARCHAR(255),
        uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // ML Predictions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS predictions (
        id SERIAL PRIMARY KEY,
        ecg_signal_id INTEGER NOT NULL REFERENCES ecg_signals(id) ON DELETE CASCADE,
        patient_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        arrhythmia_label INTEGER,
        arrhythmia_class VARCHAR(50),
        infarction_prob FLOAT,
        beats_detected INTEGER,
        emergency_level INTEGER,
        message TEXT,
        predicted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Emergency Alerts table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS emergency_alerts (
        id SERIAL PRIMARY KEY,
        patient_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        prediction_id INTEGER REFERENCES predictions(id) ON DELETE SET NULL,
        alert_level INTEGER NOT NULL,
        alert_type VARCHAR(100),
        is_resolved BOOLEAN DEFAULT FALSE,
        acknowledged_by_doctor_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
        acknowledged_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create indexes for better query performance
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_ecg_signals_patient_id ON ecg_signals(patient_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_predictions_patient_id ON predictions(patient_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_predictions_ecg_signal_id ON predictions(ecg_signal_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_emergency_alerts_patient_id ON emergency_alerts(patient_id)`);
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_emergency_alerts_is_resolved ON emergency_alerts(is_resolved)`);

    console.log('✅ Database initialized with ECG tables');
  } catch (error) {
    console.warn('Database unavailable, continuing with fallback storage:', error.message);
    throw error;
  }
}

module.exports = initDatabase;
