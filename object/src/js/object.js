class Person {
  firstname; //detta behövs inte skrivas egentligen
  lastname;
  age;
  length;
  constructor(fname, lastname, age, length) {
    this.firstname = fname;
    this.lastname = lastname;
    this.age = age;
    this.length = length;
  }
}

window.onload = function () {
  let me = new Person("Mira", "Vitsas", "25", 174);
  let lisa = new Person("Lisa", "Månsson", "26", 172);
  let textRuta = document.getElementById("pTag");
  let people = [me, lisa];

  for (i = 0; i < people.length; i++) {
    textRuta.innerHTML += " " + people[i].firstname;
    textRuta.innerHTML += " " + people[i].lastname;
  }
};
