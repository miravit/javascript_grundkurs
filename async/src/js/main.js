import axios from "axios";
import { Omdbapi } from "./models/Omdbapi";
window.onload = function () {
  getData();
};
async function getData() {
  //vänta tills axiosanropet är klart och lägg i min responsevariabel.
  let response = await axios.get(
    "http://www.omdbapi.com/?i=tt3896198&apikey=25462718&s=white"
  );
  let result = new Omdbapi(response.data.totalResults, response.data.Search);
  handleData(result.amount, result.movies);
}

function handleData(amount, movies) {
  for (let i = 0; i < movies.length; i++) {
    let container = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let pTag = document.createElement("p");
    img.className = "posters";
    img.src = movies[i].poster;
    img.alt = movies[i].title;
    title.innerHTML = movies[i].title;
    pTag.innerHTML = movies[i].year;
    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(pTag);
    document.body.appendChild(container);
  }
}
