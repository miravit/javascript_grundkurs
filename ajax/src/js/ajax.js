import axios from "axios";
import { Response } from "./models/Response";
let movieList = [];

let promise = axios.get(
  "http://www.omdbapi.com/?i=tt3896198&apikey=25462718&s=love"
);
promise.then((response) => {
  let result = new Response(response.data.Search, response.data.totalResults);
  handleData(result.movie, result.amount); //response.data är samma som data från fetch. och .Search tar mig in i Search
});

function handleData(myData, movieAmount) {
  for (let i = 0; i < myData.length; i++) {
    //console.log(myData[i]); här loopar jag ut allt inom Search
    //console.log(myData[i].Title); //kommer åt Title i Search
    //console.log(myData[i].Year); //kommer åt Year i Search
    oneMovie = myData[i].Title + ". " + "year: " + myData[i].Year;
    movieList.push(oneMovie);
  }
  console.log("såhär många filmer finns: ", movieAmount);
}

let btn = document.createElement("button");
document.body.appendChild(btn);
btn.innerText = "klicka";
btn.addEventListener("click", onScreen);

function onScreen() {
  let container = document.createElement("div");
  let myUl = document.createElement("ul");
  container.appendChild(myUl);
  document.body.appendChild(container);
  for (let i = 0; i < movieList.length; i++) {
    let myLi = document.createElement("li");
    myLi.innerHTML += movieList[i];
    myUl.appendChild(myLi);
  }
}
