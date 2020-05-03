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
  async searchMovies(searchInput, page = 1) {
    try {
      const response = await axios.get(`${this.url}`, {
        params: {
          'apikey': this.apiKey,
          's': searchInput,
          'page': page
        }
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async getMovieByID(movieID) {
    try {
      const response = await axios.get(`${this.url}`, {
        params: {
          'apikey': this.apiKey,
          'i': movieID,
        }
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