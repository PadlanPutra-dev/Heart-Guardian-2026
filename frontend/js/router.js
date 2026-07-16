import { createAuthPage } from '../pages/auth/index.js';
import { createDashboardPage } from '../pages/dashboard.js';
import { createDoctorAlertsPage } from '../pages/doctor/alerts.js';
import { createDoctorCalendarPage } from '../pages/doctor/calendar.js';
import { createDoctorPatientsPage } from '../pages/doctor/patients.js';
import { createDoctorProfilePage } from '../pages/doctor/profile.js';
import { createHomePage } from '../pages/home.js';
import { createInfoPage } from '../pages/info.js';
import { createNotificationPage } from '../pages/notifications/index.js';
import { createCaregiverAlertsPage } from '../pages/caregiver/alerts.js';
import { createCaregiverHistoryPage } from '../pages/caregiver/history.js';
import { createCaregiverMonitoringPage } from '../pages/caregiver/monitoring.js';
import { createCaregiverProfilePage } from '../pages/caregiver/profile.js';
import { createPatientAiInsightsPage } from '../pages/patient/ai-insights.js';
import { createPatientHistoryPage } from '../pages/patient/history.js';
import { createPatientMonitoringPage } from '../pages/patient/monitoring.js';
import { createPatientProfilePage } from '../pages/patient/profile.js';
import { attachSplashInteractions, createSplashScreen } from '../pages/splash/index.js';
import { clearAuthState, getAuthState, getAuthToken, setAuthState } from './state.js';
import { loginUser, registerUser, fetchProfile } from './api.js';

const app = document.getElementById('app');

window.togglePassword = function togglePassword(id, targetId) {
  const input = document.getElementById(id);
  if (!input) {
    return;
  }

  const icon = targetId ? document.getElementById(targetId) : input.nextElementSibling?.querySelector('.material-symbols-outlined') || input.nextElementSibling;
  if (!icon) {
    return;
  }

  if (input.type === 'password') {
    input.type = 'text';
    icon.textContent = 'visibility_off';
    return;
  }

  input.type = 'password';
  icon.textContent = 'visibility';
};

function syncDoctorBottomNav(hash = window.location.hash || '#/dashboard') {
  const currentHash = hash || '#/dashboard';
  const activeHref = {
    '#/dashboard': '#/dashboard',
    '#/doctor-patients': '#/doctor-patients',
    '#/doctor-calendar': '#/doctor-calendar',
    '#/doctor-alerts': '#/doctor-alerts',
    '#/doctor-profile': '#/doctor-profile'
  }[currentHash] || '#/dashboard';

  app?.querySelectorAll('a[data-bottom-nav-link="doctor"]').forEach((link) => {
    const isActive = link.getAttribute('href') === activeHref;
    link.classList.remove('bg-secondary-container', 'text-on-secondary-container', 'shadow-sm', 'font-semibold', 'text-primary', 'text-secondary');

    if (isActive) {
      link.classList.add('bg-secondary-container', 'text-on-secondary-container', 'shadow-sm', 'font-semibold');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.add('text-on-surface-variant');
      link.removeAttribute('aria-current');
    }
  });
}

function syncCaregiverBottomNav(hash = window.location.hash || '#/dashboard') {
  const currentHash = hash || '#/dashboard';
  const activeHref = {
    '#/dashboard': '#/dashboard',
    '#/caregiver-monitoring': '#/caregiver-monitoring',
    '#/caregiver-alerts': '#/caregiver-alerts',
    '#/caregiver-history': '#/caregiver-history',
    '#/caregiver-profile': '#/caregiver-profile'
  }[currentHash] || '#/dashboard';

  app?.querySelectorAll('a[data-bottom-nav-link="caregiver"]').forEach((link) => {
    const isActive = link.getAttribute('href') === activeHref;
    link.classList.remove('bg-primary/10', 'text-primary', 'shadow-sm', 'font-semibold', 'text-on-secondary-container', 'bg-secondary-container');

    if (isActive) {
      link.classList.add('bg-primary/10', 'text-primary', 'shadow-sm', 'font-semibold');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.add('text-on-surface-variant');
      link.removeAttribute('aria-current');
    }
  });
}

function syncPatientBottomNav(hash = window.location.hash || '#/dashboard') {
  const currentHash = hash || '#/dashboard';
  const activeHref = {
    '#/dashboard': '#/dashboard',
    '#/monitoring': '#/monitoring',
    '#/ai-insights': '#/ai-insights',
    '#/history': '#/history',
    '#/profile': '#/profile'
  }[currentHash] || '#/dashboard';

  app?.querySelectorAll('a[data-bottom-nav-link="patient"]').forEach((link) => {
    const isActive = link.getAttribute('href') === activeHref;
    link.classList.remove('bg-primary/10', 'text-primary', 'shadow-sm', 'font-semibold', 'text-on-secondary-container', 'bg-secondary-container');

    if (isActive) {
      link.classList.add('bg-primary/10', 'text-primary', 'shadow-sm', 'font-semibold');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.add('text-on-surface-variant');
      link.removeAttribute('aria-current');
    }
  });
}

function renderLayout(content) {
  app.innerHTML = `
    <div class="min-h-screen bg-[linear-gradient(180deg,#f8fbf8_0%,#f4f7fa_100%)] text-on-background">
      <main>${content}</main>
    </div>
  `;
  syncDoctorBottomNav(window.location.hash || '#/dashboard');
  syncCaregiverBottomNav(window.location.hash || '#/dashboard');
  syncPatientBottomNav(window.location.hash || '#/dashboard');
}

async function renderPage() {
  const hash = window.location.hash || '#/splash';
  const authState = getAuthState();
  const token = getAuthToken();

  if (hash === '#/splash' || hash === '#/') {
    app.innerHTML = createSplashScreen();
    attachSplashInteractions();
    return;
  }

  if ((hash === '#/dashboard' || hash === '#/login' || hash === '#/register') && authState?.token && !token) {
    clearAuthState();
  }

  if (hash === '#/dashboard' && !token) {
    window.location.hash = '#/login';
    return;
  }

  if (hash === '#/login' && token) {
    window.location.hash = '#/dashboard';
    return;
  }

  if (hash === '#/register' && token) {
    window.location.hash = '#/dashboard';
    return;
  }

  if (hash === '#/login') {
    renderLayout(createAuthPage('login'));
    attachAuthHandlers('login');
    return;
  }

  if (hash === '#/register') {
    const selectedRole = sessionStorage.getItem('heart-guardian-selected-role') || 'patient';
    const registerStage = sessionStorage.getItem('heart-guardian-register-step') || 'role-select';
    renderLayout(createAuthPage('register', selectedRole, registerStage));
    attachAuthHandlers('register');
    return;
  }

  if (hash === '#/forgot') {
    renderLayout(createAuthPage('forgot'));
    attachAuthHandlers('forgot');
    return;
  }

  if (hash === '#/forgot-success') {
    renderLayout(createNotificationPage('password-reset-success'));
    return;
  }

  if (hash === '#/dashboard') {
    if (token) {
      try {
        const existingState = getAuthState() || {};
        const profile = await fetchProfile(token).catch(() => null);
        const resolvedUser = profile?.data?.user || existingState.user || { role: 'patient' };
        const nextState = { token, user: { ...existingState.user, ...resolvedUser } };
        setAuthState(nextState);
        renderLayout(createDashboardPage(nextState));
      } catch (error) {
        console.error('Profile fetch failed:', error);
        const fallbackState = getAuthState() || { user: { role: 'patient' } };
        renderLayout(createDashboardPage({ token, user: fallbackState.user }));
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/monitoring') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createPatientMonitoringPage(profile.data));
      } catch (error) {
        console.error('Monitoring page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/ai-insights') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createPatientAiInsightsPage(profile.data));
      } catch (error) {
        console.error('AI Insights page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/history') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createPatientHistoryPage(profile.data));
      } catch (error) {
        console.error('History page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/doctor-patients') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createDoctorPatientsPage(profile.data));
      } catch (error) {
        console.error('Doctor patients page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/doctor-calendar') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createDoctorCalendarPage(profile.data));
      } catch (error) {
        console.error('Doctor calendar page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/doctor-alerts') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createDoctorAlertsPage(profile.data));
      } catch (error) {
        console.error('Doctor alerts page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/doctor-profile') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createDoctorProfilePage(profile.data));
      } catch (error) {
        console.error('Doctor profile page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/caregiver-monitoring') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createCaregiverMonitoringPage(profile.data));
      } catch (error) {
        console.error('Caregiver monitoring page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/caregiver-alerts') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createCaregiverAlertsPage(profile.data));
      } catch (error) {
        console.error('Caregiver alerts page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/caregiver-history') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createCaregiverHistoryPage(profile.data));
      } catch (error) {
        console.error('Caregiver history page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/caregiver-profile') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createCaregiverProfilePage(profile.data));
      } catch (error) {
        console.error('Caregiver profile page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/profile') {
    if (token) {
      try {
        const profile = await fetchProfile(token);
        setAuthState({ token, user: profile.data.user });
        renderLayout(createPatientProfilePage(profile.data));
      } catch (error) {
        console.error('Profile page load failed:', error);
        clearAuthState();
        window.location.hash = '#/login';
      }
    } else {
      window.location.hash = '#/login';
    }
    return;
  }

  if (hash === '#/features') {
    renderLayout(createInfoPage('Features overview', 'This section can be expanded with your full UI screens for capabilities, benefits, and product highlights.'));
    return;
  }

  if (hash === '#/how-it-works') {
    renderLayout(createInfoPage('How it works', 'You can later replace this placeholder with the complete Figma-derived workflow experience for your product.'));
    return;
  }

  if (hash === '#/faq') {
    renderLayout(createInfoPage('Frequently asked questions', 'Use this page to display a richer FAQ experience or support content as your product grows.'));
    return;
  }

  window.location.hash = '#/splash';
  return;
}

function attachAuthHandlers(mode) {
  if (mode === 'forgot') {
    document.querySelector('[data-forgot-form]')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const email = formData.get('email');

      if (!email) {
        return;
      }

      window.location.hash = '#/forgot-success';
    });
    return;
  }

  if (mode === 'register') {
    document.querySelectorAll('[data-role-select-option]').forEach((button) => {
      button.addEventListener('click', () => {
        const role = button.getAttribute('data-role-select-option');
        sessionStorage.setItem('heart-guardian-selected-role', role);
        renderPage();
      });
    });

    document.querySelector('[data-continue-registration]')?.addEventListener('click', () => {
      const role = sessionStorage.getItem('heart-guardian-selected-role') || 'patient';
      sessionStorage.setItem('heart-guardian-selected-role', role);
      const nextStage = role === 'patient' ? 'patient-form' : role === 'caregiver' ? 'caregiver-form' : 'doctor-form';
      sessionStorage.setItem('heart-guardian-register-step', nextStage);
      renderPage();
    });

    document.querySelector('[data-back-to-role]')?.addEventListener('click', () => {
      sessionStorage.setItem('heart-guardian-register-step', 'role-select');
      renderPage();
    });
  }

  const form = document.querySelector(`[data-${mode === 'login' ? 'login' : 'register'}-form]`);
  if (!form) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const role = formData.get('role') || sessionStorage.getItem('heart-guardian-selected-role') || 'patient';

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      let response;

      if (mode === 'login') {
        response = await loginUser({ email, password });
      } else {
        const fullName = formData.get('fullName');
        const confirmPassword = formData.get('confirmPassword');
        const termsAccepted = formData.get('terms') || formData.get('privacy');

        if (!fullName || !email || !password || !confirmPassword) {
          alert('Please fill in all required fields.');
          return;
        }

        if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
        }

        if (!termsAccepted) {
          alert('Please agree to the terms and conditions.');
          return;
        }

        const payload = { fullName, email, password, role };
        const phoneNumber = formData.get('phoneNumber');
        if (phoneNumber) payload.phoneNumber = phoneNumber;
        const relationship = formData.get('relationship');
        if (relationship) payload.relationship = relationship;
        const licenseNumber = formData.get('licenseNumber');
        if (licenseNumber) payload.licenseNumber = licenseNumber;
        const specialization = formData.get('specialization');
        if (specialization) payload.specialization = specialization;
        const hospitalName = formData.get('hospitalName');
        if (hospitalName) payload.hospitalName = hospitalName;
        const yearsExperience = formData.get('yearsExperience');
        if (yearsExperience) payload.yearsExperience = yearsExperience;

        response = await registerUser(payload);
      }

      const { token, user } = response.data;
      sessionStorage.removeItem('heart-guardian-register-step');
      sessionStorage.removeItem('heart-guardian-selected-role');
      setAuthState({ token, user });
      window.location.hash = '#/dashboard';
    } catch (error) {
      console.error('Auth error:', error);
      alert(error.response?.message || error.message || 'Unable to authenticate. Please try again.');
    }
  });
}

function wireGlobalEvents() {
  document.addEventListener('click', (event) => {
    const logoutButton = event.target.closest('[data-logout]');
    if (!logoutButton) {
      return;
    }

    event.preventDefault();
    sessionStorage.removeItem('heart-guardian-register-step');
    sessionStorage.removeItem('heart-guardian-selected-role');
    clearAuthState();
    window.location.hash = '#/login';
  });
}

export function initRouter() {
  renderPage();
  wireGlobalEvents();
  window.addEventListener('hashchange', renderPage);
}
