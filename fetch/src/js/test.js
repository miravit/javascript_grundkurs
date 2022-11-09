fetch("http://www.omdbapi.com/?i=tt3896198&apikey=25462718&s=white")
  .then((response) => response.json())
  .then((data) => {
    handleData(data);
  });

function handleData(myData) {
  for (let i = 0; i < myData.Search.length; i++) {
    pTag = document.createElement("p");
    pTag.innerHTML += myData.Search[i].Title;
    document.body.appendChild(pTag);
  }
}
