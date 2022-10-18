let myName = "Mira"
let nameLength = myName.length;
let textOutput = document.getElementById("ptag");




window.onload = function() {
 for (i=0;i<nameLength;i++) {
     let spaceBetween = myName.split("").join(" ");
     console.log(spaceBetween);
     break;
 }
}

let numbers = [1,2,3,4,5,6,7,8,9,11];
console.log(numbers);
let sum = 0;

for (i=0; i<numbers.length; i++) {
    sum+= numbers[i];
    
}
console.log(sum);