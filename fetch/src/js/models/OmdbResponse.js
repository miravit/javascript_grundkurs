import { Movie } from "../models/Movies";

export class OmdbResponse {
  //exporterar till main
  constructor(Search, totalResults) {
    this.movies = Search.map((movie) => {
      return new Movie(movie.Title, movie.Poster);
    }); //döper om Search till movies
    this.amount = totalResults; //döper om totalResults till amount
  }
}
