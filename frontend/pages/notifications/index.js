import { createPasswordResetSuccessNotification } from './password-reset-success.js';

export function createNotificationPage(type = 'password-reset-success') {
  switch (type) {
    case 'password-reset-success':
      return createPasswordResetSuccessNotification();
    default:
      return createPasswordResetSuccessNotification();
  }
}
