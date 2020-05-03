import api from '../service/apiServiceOMDB';

class MoviesStore {
  constructor(api) {
    this.api = api;
    this.searchResult = null;
    this.fullDescMovies = null;
  }

  async init() {
    const response = await this.api.searchMovies('day');
    this.searchResult = response;
  }

  async searchMovies(movieTitle, page) {
    const response = await this.api.searchMovies(movieTitle, page);
    this.searchResult = response.Search;
    if (this.searchResult) {
      this.fullDescMovies = await this.getFullDescMovies(this.searchResult);
    } else { 
      return null; } 
    
    return this.fullDescMovies;
  }

  async getFullDescMovies(searchResult) {
      return searchResult.reduce(async (acc, movieShortDesc) => {
      const sumArr = await acc;
      const fullDescMovie = await this.api.getMovieByID(movieShortDesc.imdbID);
      let rating = fullDescMovie.Ratings[0].Value;
      rating = rating.slice(0, rating.indexOf('/'));
      const tempObj = {
        'title': fullDescMovie.Title,
        'year' : fullDescMovie.Year,
        'poster': fullDescMovie.Poster,
        'rating': rating
      };
      sumArr.push(tempObj);
      return sumArr;
    }, []);
  }
}

const moviesStore  = new MoviesStore(api);

export default moviesStore;