let clickButton = document.getElementById("textbutton");
clickButton.addEventListener("click", showText)

let pText = document.getElementById("ptag");
let myInput = document.getElementById("textbox");

// kopplar min button till en class som heter .button
clickButton.className= "button";

function showText() {
    
    let theText = parseInt(myInput.value);

    if (theText>100) {
        pText.innerHTML="Det var ett stort tal";
    } else {
        pText.innerHTML="Det var ett litet tal";
    }

     
    
}

