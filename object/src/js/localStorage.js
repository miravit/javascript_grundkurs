function TrackNumbers() {
  let userButton = document.getElementById("btn");
  userButton.addEventListener("click", collectAge);

  let userInput = "";

  function collectAge() {
    let userInput = document.getElementById("userInput").value;
    nummer.push(userInput);
    SendToLS(userInput);
  }
  function SendToLS(inputToLS) {
    let myObj = JSON.stringify(inputToLS);
    console.log(myObj);
    localStorage.setItem("age", myObj);
    myListOnPage(myObj);
  }

  let nummer = [];
  console.log(userInput);

  function myListOnPage(myObj) {
    myText = document.createElement("p");
    myList = document.createElement("li");
    //let myObjToString = JSON.stringify(myObj);
    myList.innerHTML += myObj;
    document.body.appendChild(myText);
    document.body.appendChild(myList);
  }
  console.log(nummer);
}

TrackNumbers();
