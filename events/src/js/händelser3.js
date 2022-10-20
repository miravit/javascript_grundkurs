function onClick () {
 let userInput = document.getElementById("textbox");
 let userInputChanged = parseInt(userInput.value);
 



 let pText = document.getElementById("ptag");
 pText.innerHTML=userInputChanged;
 
}

let userNumber = document.getElementById("textbutton");
userNumber.addEventListener("click", onClick);