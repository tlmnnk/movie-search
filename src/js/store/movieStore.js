import api from '../service/apiServiceOMDB';

class MoviesStore {
  constructor(api) {
    this.api = api;
    this.searchResult = null;
    this.fullDescMovies = null;
    this.totalResponseLength = null;
    this.totalResults = null;
  }

  async searchMovies(movieTitle, page) {
    const response = await this.api.searchMovies(movieTitle, page);
    this.searchResult = response.Search;
    this.totalResults = response.totalResults;
    console.log(response);
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
      rating ? rating = rating.slice(0, rating.indexOf('/')) : rating = 'N/A';
      const tempObj = {
        'titleLink': `https://www.imdb.com/title/${fullDescMovie.imdbID}`,
        'title': fullDescMovie.Title,
        'year' : fullDescMovie.Year,
        'poster': fullDescMovie.Poster,
        'rating': rating
      };
      sumArr.push(tempObj);
      return sumArr;
    }, []);
  }

  getTotalResults() {
    return this.totalResults;
  }
  
}

const moviesStore  = new MoviesStore(api);

export default moviesStore;