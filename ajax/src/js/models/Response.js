export class Response {
  constructor(Search, totalResults) {
    this.movie = Search;
    this.amount = totalResults;
  }
}
