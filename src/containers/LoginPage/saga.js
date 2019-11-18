import { call, put, takeLatest } from 'redux-saga/effects';

import { LOGIN, LOAD_AUTH } from './constants';
import { loginSuccess, loginFailed } from './actions';
import { login } from '../../services/data/LoginDataService';
import { isUserLoggedIn, setAuthCreds, removeAuthCreds } from '../../services/auth/AuthService';
import history from '../../utils/history';

export function* loginUser({ payload }) {
  try {
    const response = yield call(login, payload);
    setAuthCreds(response.token, response.expire);
    yield put(loginSuccess());
    history.push('/');
  } catch (err) {
    removeAuthCreds();
    yield put(loginFailed(err));
  }
};

export function* loadAuth() {
  const isLoggedIn = isUserLoggedIn();

  if (isLoggedIn) {
    yield put(loginSuccess());
  } else {
    yield put(loginFailed({}));
  }
};

export default function* LoginUserWatcher() {
  yield takeLatest(LOGIN, loginUser);
  yield takeLatest(LOAD_AUTH, loadAuth);
};