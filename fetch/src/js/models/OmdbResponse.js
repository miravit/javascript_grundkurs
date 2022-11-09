export class OmdbResponse {
  //exporterar till main
  constructor(Search, totalResults) {
    this.movies = Search; //döper om Search till movies
    this.amount = totalResults; //döper om totalResults till amount
  }
}
