import ApiService from '../api/ApiService';

export const getThemes = (params = {}) => {
  return ApiService.get(
    'http://chattermill-challenge.com/api/themes',
    { queryString: params },
  );
};