import { Movie } from "./Movie";

export class Omdbapi {
  constructor(amount, movies) {
    this.amount = amount;
    this.movies = movies.map((movie) => {
      return new Movie(movie.Title, movie.Poster, movie.Year);
    });
  }
}
