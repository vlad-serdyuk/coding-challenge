import { getItem } from '../SessionService';

export default class Configuration {
  baseUrl = '';
  defaultOptions = {
    headers: {
      Authorization: getItem('token') ?  getItem('token') : '',
    },
  };

  setAuthToken(token) {
    this.defaultOptions.headers.Authorization = token;
  };
};