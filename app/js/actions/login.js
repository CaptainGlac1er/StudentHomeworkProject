export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

export function loginUser(user) {
  window.sessionStorage.setItem('auth', user);
  return {
    type: LOGIN_USER,
    payload: user,
  };
}

export function logoutUser() {
  window.sessionStorage.removeItem('auth');
  return {
    type: LOGOUT_USER,
  };
}

export function registerUser(user) {
  window.sessionStorage.setItem('auth', user);
  return {
    type: REGISTER_USER,
    payload: user,
  };
}

