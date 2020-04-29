import axios from 'axios';
import config from '../config/apiConfig';

/**
 * /countries - array of countries
 * /cities - array of cities
 * /prices/cheap - array
 */
class Api {
  constructor(config) {
    this.url = config.url;
    this.apiKey = config.apiKey;
  }
  async searchMovies(searchInput) {
    try {
      const response = await axios.get(`${this.url}${this.apiKey}`, {
        's': searchInput,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

const api = new Api(config);

export default api;