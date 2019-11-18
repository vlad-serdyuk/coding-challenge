import invariant from 'invariant';

import Configuration from './Configuration';

class ApiService {
  constructor() {
    if (!!ApiService.instance) {
      return ApiService.instance;
    }
    
    ApiService.instance = this;
    this.config = new Configuration();

    return this;
  }

  _addQueryStringToUrl(url, params) {
    const _url = new URL(url);
    Object.keys(params).forEach(key => _url.searchParams.append(key, params[key]));
    
    return _url;
  };

  async _makeRequest(url, options) {
    const response = await fetch(url, options);

    if (response.status !== 200) {
      const responseData = await response.json();
      throw new Error(responseData.message);
    }

    const responseData = await response.json();
    return responseData;
  };

  setHeaderAuthToken(token) {
    this.config.setAuthToken(token);
  };

  async get(url, params = {}) {
    invariant(url, 'GET method should include url');

    const _url = this._addQueryStringToUrl(url, params.queryString);
  
    const options = {
      ...params,
    }
  
    const responseDate = await this._makeRequest(_url, { ...this.config.defaultOptions, ...options });
    return responseDate;
  };

  async post(url, data, params = {}) {
    invariant(url, 'POST method should include url');
  
    const options = {
      ...params,
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: data,
    }
  
    const responseDate = await this._makeRequest(url, { ...this.config.defaultOptions, ...options });
    return responseDate;
  };
}

export default new ApiService();
