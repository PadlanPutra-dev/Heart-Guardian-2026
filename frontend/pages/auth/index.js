import { createForgotPage } from './forgot.js';
import { createForgotSuccessPage } from './forgot-success.js';
import { createLoginPage } from './login.js';
import { createRegisterPage } from './register.js';

export function createAuthPage(mode = 'login', selectedRole = 'patient', stage = 'role-select') {
  switch (mode) {
    case 'forgot':
      return createForgotPage();
    case 'forgot-success':
      return createForgotSuccessPage();
    case 'register':
      return createRegisterPage(selectedRole, stage);
    default:
      return createLoginPage();
  }
}
