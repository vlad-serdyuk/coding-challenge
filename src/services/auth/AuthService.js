import ApiService from '../api/ApiService';
import { setItem, getItem, removeItem } from '../SessionService';

function isExpiryDateExpired(expiryDate) {
  return new Date(expiryDate) < new Date();
};

export function getAuthToken() {
  return getItem('token');
};

export function getExpiryDate() {
  return getItem('expiryDate');
};

export function setAuthCreds(token, expiryDate) {
  setItem('token', `Bearer ${token}`);
  setItem('expiryDate', expiryDate);
  ApiService.setHeaderAuthToken(`Bearer ${token}`);
};

export function removeAuthCreds() {
  removeItem('token');
  removeItem('expiryDate');
};

export function isUserLoggedIn() {
  const token = getAuthToken();
  const expiryDate = getExpiryDate();
  return (token && expiryDate && !isExpiryDateExpired(expiryDate));
};
