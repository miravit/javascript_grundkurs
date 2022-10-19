let userButton = document.getElementById("button");
userButton.addEventListener("click" ,showName )

let nummer =["kaffe, bröd, mjölk, tomat, choklad"];
console.log(nummer)
let found = false;
let userInput="";


function showName () {
    
    for (i=0; i<nummer.length; i++) {
    let userInput = document.getElementById("userinput").value;
    nummer.push(userInput);
    console.log(nummer);
    let textArea = document.getElementById("textarea");
    textArea.innerHTML+= userInput+"+"
    break;
    }



}

//hhär ovan har jag pushat in min input i min array.

