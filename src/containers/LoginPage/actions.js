import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_EXPIRED, LOAD_AUTH } from './constants';

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
};

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
};

export function loginFailed(payload) {
  return {
    type: LOGIN_FAILED,
    payload,
  };
};

export function loginExpired(payload) {
  return {
    type: LOGIN_EXPIRED,
    payload,
  };
};

export function loadAuth() {
  return {
    type: LOAD_AUTH,
  };
};