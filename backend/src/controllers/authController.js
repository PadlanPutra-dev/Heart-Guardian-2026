const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');
require('dotenv').config();

function normalizeRole(role) {
  const normalized = String(role || 'patient').toLowerCase();
  return ['patient', 'caregiver', 'doctor'].includes(normalized) ? normalized : 'patient';
}

async function register(req, res) {
  try {
    const { fullName, email, password, role, phoneNumber, relationship, licenseNumber, specialization, hospitalName, yearsExperience, ...rest } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const normalizedRole = normalizeRole(role);
    const metadata = {
      phoneNumber,
      relationship,
      licenseNumber,
      specialization,
      hospitalName,
      yearsExperience,
      ...rest,
    };
    const user = await createUser({ fullName, email, passwordHash, role: normalizedRole, metadata });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '7d'
    });

    return res.status(201).json({ success: true, message: 'User registered successfully', data: { user, token } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Registration failed', error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role, fullName: user.full_name || user.fullName || user.name || null }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '7d'
    });

    return res.json({ success: true, message: 'Login successful', data: { user: { id: user.id, fullName: user.full_name, email: user.email, role: user.role }, token } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Login failed', error: error.message });
  }
}

async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const user = await findUserByEmail(email);

    // Always return success for password reset requests to avoid account enumeration.
    if (!user) {
      return res.json({ success: true, message: 'If that email exists, a reset link has been sent.' });
    }

    // Here you could create a reset token and send an email with a reset link.
    // For now we simulate the flow with a success response.
    return res.json({ success: true, message: 'If that email exists, a reset link has been sent.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Forgot password request failed', error: error.message });
  }
}

module.exports = { register, login, forgotPassword };
