const bcrypt = require('bcryptjs');
const pool = require('../config/database');

const inMemoryUsers = new Map();

function normalizeRole(role) {
  const normalized = String(role || 'patient').toLowerCase();
  return ['patient', 'caregiver', 'doctor'].includes(normalized) ? normalized : 'patient';
}

function normalizeUser(row) {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    full_name: row.full_name || row.fullName || row.name || null,
    fullName: row.full_name || row.fullName || row.name || null,
    email: row.email,
    password_hash: row.password_hash || row.passwordHash || null,
    role: normalizeRole(row.role),
    created_at: row.created_at,
    metadata: row.metadata || {},
  };
}

async function createUser({ fullName, email, passwordHash, role = 'patient', metadata = {} }) {
  const normalizedRole = normalizeRole(role);

  try {
    const result = await pool.query(
      `INSERT INTO users (full_name, email, password_hash, role)
       VALUES ($1, $2, $3, $4)
       RETURNING id, full_name, email, role, created_at`,
      [fullName, email, passwordHash, normalizedRole]
    );

    return normalizeUser(result.rows[0]);
  } catch (error) {
    const normalizedEmail = String(email).toLowerCase();
    const userRecord = {
      id: Date.now(),
      full_name: fullName,
      email: normalizedEmail,
      password_hash: passwordHash,
      role: normalizedRole,
      created_at: new Date().toISOString(),
      metadata: { ...metadata },
    };
    inMemoryUsers.set(normalizedEmail, userRecord);
    return normalizeUser(userRecord);
  }
}

async function findUserByEmail(email) {
  const normalizedEmail = String(email).toLowerCase();
  const inMemoryUser = inMemoryUsers.get(normalizedEmail);
  if (inMemoryUser) {
    return normalizeUser(inMemoryUser);
  }

  try {
    const result = await pool.query(
      `SELECT id, full_name, email, password_hash, role, created_at
       FROM users
       WHERE email = $1`,
      [normalizedEmail]
    );

    return normalizeUser(result.rows[0]);
  } catch (error) {
    return null;
  }
}

async function seedDemoUser() {
  const demoUsers = [
    {
      email: 'patient@example.com',
      password: 'password123',
      fullName: 'Patient Demo',
      role: 'patient',
    },
    {
      email: 'caregiver@example.com',
      password: 'password123',
      fullName: 'Caregiver Demo',
      role: 'caregiver',
    },
    {
      email: 'doctor@example.com',
      password: 'password123',
      fullName: 'Dr. Smith',
      role: 'doctor',
    },
  ];

  for (const demoUser of demoUsers) {
    const existingUser = await findUserByEmail(demoUser.email);
    if (existingUser) {
      continue;
    }

    const passwordHash = await bcrypt.hash(demoUser.password, 10);
    await createUser({
      fullName: demoUser.fullName,
      email: demoUser.email,
      passwordHash,
      role: demoUser.role,
    });
  }

  return true;
}

module.exports = { createUser, findUserByEmail, seedDemoUser };
