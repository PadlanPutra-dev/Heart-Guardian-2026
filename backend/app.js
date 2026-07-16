const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Heart Guardian backend is running. Use /api/auth/login or /api/auth/register.',
  });
});

const healthRoutes = require('./src/routes/healthRoutes');
const authRoutes = require('./src/routes/authRoutes');
const protectedRoutes = require('./src/routes/protectedRoutes');

app.use(healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

module.exports = app;
