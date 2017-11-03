import { loginService } from '../services/login'

export const actions = {
  SET_LOGIN_PENDING: 'SET_LOGIN_PENDING',
  SET_LOGIN_SUCCESS: 'SET_LOGIN_SUCCESS',
  SET_LOGIN_ERROR: 'SET_LOGIN_ERROR'
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    loginService.login(email, password).then(
      token => {
        localStorage.setItem('token', <any>token);
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
      },
      error => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError(error));
      }
    );
  }
}

function setLoginPending(isLoginPending) {
  return {
    type: actions.SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: actions.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: actions.SET_LOGIN_ERROR,
    loginError
  }
}
