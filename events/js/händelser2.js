let clickButton = document.getElementById("textbutton");
clickButton.addEventListener("click", showText)



function showText() {
    let myInput = document.getElementById("textbox");
    let theText = parseInt(myInput.value);

    let pText = document.getElementById("ptag");
    

    if (theText>100) {
        pText.innerHTML="Det var ett stort tal";
    } else {
        pText.innerHTML="Det var ett litet tal";
    }

     
    
}

