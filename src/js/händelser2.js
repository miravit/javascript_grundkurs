function showText() {
    let myInput = document.getElementById("textBox");
    let theText = myInput.value;
    //hittar mitt inputID "textBox" och gör den till en variabel som heter myInput
    // Sedan skapar jag en variabeln som ska innehålla den skrivna texten. value är det värde jag hämtar från textrutan. alltså användarens text.

    let pText = document.getElementById("ptag");
    pText.innerHTML = theText;
    //här ovan har jag skapat en <p> i min html som jag hämtar och gör till en variabel.
    //Sedan lägger jag till texten från rutan genom .innerHTML

}

//här hittar jag id till min knapp och anropar functionen showText när jag klickar.
//Jag skickas alltså till funktionen ovan.
let clickButton = document.getElementById("textButton");
clickButton.addEventListener("click", showText)