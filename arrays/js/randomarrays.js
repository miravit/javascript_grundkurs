let userButton = document.getElementById("button");
userButton.addEventListener("click" ,showName )

let nummer =["kaffe, bröd, mjölk, tomat, choklad"];
console.log(nummer)

function showName () {
let userInput = document.getElementById("userinput").value;

nummer.push(userInput);
console.log(nummer);

let textArea = document.getElementById("textarea");
textArea.innerHTML+= userInput + " las nu till i listan i konsollen!"

for (let i=0; i<nummer.lenght; i++){
    console.log(nummer[i]+" ");
}
}

//hhär ovan har jag pushat in min input i min array.

