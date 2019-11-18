import ApiService from '../api/ApiService';

export const login = (params = {}) => {
  return ApiService.post('http://chattermill-challenge.com/login', new URLSearchParams(params));
};