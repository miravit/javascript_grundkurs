localStorage.setItem("name", "mira");

let NameFromStorage = localStorage.getItem("name", "mira");

let pTag = document.createElement("p");
pTag.innerHTML += NameFromStorage;

document.body.appendChild(pTag);

class Person {
  firstname;
  lastname;
  age;
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
}

let me = new Person("mira", "vitsas", 25);
let lisa = new Person("Lisa", "Månsson", 26);
let people = [me, lisa];

let myObj = JSON.stringify(people);

localStorage.setItem("people", myObj);

localStorage.getItem("people", myObj);
let myObjToString = JSON.parse(myObj);
console.log(myObjToString);
