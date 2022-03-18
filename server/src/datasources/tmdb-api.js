const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();
const TMDB_KEY = "?api_key=07e2b31565ecb7a732781e14d5f02ca1";

class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3/";
  }
  ///GET SINGLE MOVIE and their CREDITS and REVIEWS
  getSingleMovie(movie_id) {
    return this.get(`movie/${movie_id}${TMDB_KEY}`);
  }

  getActors(movie_id) {
    return this.get(`movie/${movie_id}/credits${TMDB_KEY}`);
  }

  getReviews(movie_id) {
    return this.get(`movie/${movie_id}/reviews${TMDB_KEY}`);
  }
  getDiscoverMovies() {
    return this.get(`discover/movie${TMDB_KEY}`);
  }
}

module.exports = TmdbAPI;
