import ApiService from '../api/ApiService';

export const getReviews = (params = {}) => {
  return ApiService.get(
    'http://chattermill-challenge.com/api/reviews',
    { queryString: params },
  );
};