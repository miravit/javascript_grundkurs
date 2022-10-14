function showText() {
    let myInput = document.getElementById("textbox");
    let theText = parseInt(myInput.value);

    let mySecondInput = document.getElementById("othertextbox");
    let theSecondText = parseInt(mySecondInput.value);

    let summan = theText + theSecondText;

    let pText = document.getElementById("ptag");
    pText.innerHTML = summan;


}

let clickButton = document.getElementById("textbutton");
clickButton.addEventListener("click", showText)