const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const predictionController = require('../controllers/predictionController');
const router = express.Router();

// Routes - temporarily disabled auth for testing
router.post('/predict/:patientId', predictionController.predictFromSignal);
router.post('/predict-file/:patientId', predictionController.predictFromFile);

// Get prediction history
router.get('/predictions/:patientId', predictionController.getPredictionHistory);

// Get latest prediction
router.get('/predictions/:patientId/latest', predictionController.getLatestPrediction);

// Get emergency alerts
router.get('/alerts/:patientId', predictionController.getEmergencyAlerts);

// Health check for ML API
router.get('/ml-api/health', predictionController.mlApiHealth);

module.exports = router;
