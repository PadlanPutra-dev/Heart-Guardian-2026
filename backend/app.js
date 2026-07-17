const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }
}));

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Heart Guardian backend is running.',
    endpoints: {
      auth: '/api/auth',
      predictions: '/api/predict',
      alerts: '/api/alerts'
    }
  });
});

const healthRoutes = require('./src/routes/healthRoutes');
const authRoutes = require('./src/routes/authRoutes');
const protectedRoutes = require('./src/routes/protectedRoutes');
const predictionRoutes = require('./src/routes/predictionRoutes');

app.use(healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api', predictionRoutes);

module.exports = app;
