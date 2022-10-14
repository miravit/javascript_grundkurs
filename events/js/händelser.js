//en funktion som ger en text i consolen när jag klickar på en knapp
function youClicked() {
    console.log("Du klickade på knappen!")
}

//Först hittar jag min buttons id i min DOM och gör den till en variabel
//sedan använder jag variabeln till att lyssna på när användaren klickar och sedan anropa min funktion youClicked. utan ().
let userClick = document.getElementById("buttonClick");
userClick.addEventListener("click", youClicked);

