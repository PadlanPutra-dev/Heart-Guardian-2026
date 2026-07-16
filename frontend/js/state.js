const AUTH_STORAGE_KEY = 'heart-guardian-auth';

export function getAuthState() {
  try {
    const storedValue = localStorage.getItem(AUTH_STORAGE_KEY);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error('Unable to read auth state', error);
    return null;
  }
}

export function getAuthToken() {
  const state = getAuthState();
  return state?.token || null;
}

export function setAuthState(authState) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState));
}

export function clearAuthState() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function isAuthenticated() {
  const state = getAuthState();
  return Boolean(state?.token && state?.user);
}
