import { OmdbResponse } from "./models/OmdbResponse";

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=25462718&s=white")
  .then((response) => response.json())
  .then((data) => {
    let result = new OmdbResponse(data.Search, data.totalResults); //skapar ett objekt i min klass där första parametern är data.Search vilket motsvarar movies i min OmdbResponse. och andra parameterna är data.totalResults som jag hasr föpt om till amount. Nogrann med vilken ordning egenskaperna ligger i parametrarna. jag tilldelar detta variabeln result så att jag enkelt kan komma åt klassen.
    handleData(result.movies, result.amount);
    console.log(result.movies); //såhär kan jag enkelt koppla ihop result som är mitt nya objekt i klassen med movies som jag döpt om data.Search till.
    console.log(result.amount);
  });

function handleData(someMovies, movieAmount) {
  for (let i = 0; i < someMovies.length; i++) {
    let container = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");
    title.innerHTML = someMovies[i].title;
    img.src = someMovies[i].imageUrl;
    img.alt = someMovies[i].title;
    container.appendChild(title);
    container.appendChild(img);
    document.body.appendChild(container);
  }
  console.log("såhär många filmer finns det: ", movieAmount);
}
