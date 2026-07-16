import { createCaregiverDashboardPage } from './caregiver/dashboard.js';
import { createPatientDashboardPage } from './patient/dashboard.js';
import { createDoctorDashboardPage } from './doctor/dashboard.js';

function getUserRole(authState) {
  return String(authState?.user?.role || authState?.role || 'patient').toLowerCase();
}

export function createDashboardPage(authState) {
  const role = getUserRole(authState);

  if (role === 'doctor') {
    return createDoctorDashboardPage(authState);
  }

  if (role === 'caregiver') {
    return createCaregiverDashboardPage(authState);
  }

  return createPatientDashboardPage(authState);
}
