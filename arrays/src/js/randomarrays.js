let userButton = document.getElementById("button");
userButton.addEventListener("click", showName);

let nummer = ["kaffe, bröd, mjölk, tomat, choklad"];
console.log(nummer);

let userInput = "";

function showName() {
  for (i = 0; i < nummer.length; i++) {
    let userInput = document.getElementById("userinput").value;
    nummer.push(userInput);
    console.log(nummer);
    let textArea = document.getElementById("textarea");
    textArea.innerHTML += userInput + "+";
    return userInput;
  }
}

//hhär ovan har jag pushat in min input i min array.

class Food {
  fruit;
  spice;
  dessert;
  constructor(fruit, spice, dessert) {
    this.fruit = fruit;
    this.spice = spice;
    this.dessert = dessert;
  }
}

let ica = new Food("banan", "peppar", "choklad");

console.log(ica);

let textArea = document.getElementById("textarea");
textArea.innerHTML += " " + ica.fruit;
textArea.innerHTML += " " + ica.spice;
textArea.innerHTML += " " + ica.dessert;
