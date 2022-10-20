let me = {
  firstname: "sebastian",
  age: 43,
};
let wife = { firstname: "hanna", age: 42 };

let family = [me, wife];

for (let i = 0; i < family.length; i++) {
  let container = document.createElement("div"); //skapar en div
  let name = document.createElement("h3"); //skapar en h3
  let age = document.createElement("span"); //skapar en span
  container.className = "person"; //<div class="person"> </div>
  name.className = "person__name"; //<h3 class="person__name"> </h3>
  name.innerHTML = family[i].firstname; //skriver ut båda firstname i familylistan i innerHTML av h3.
  age.className = "person__age"; // <span class="person__age"> </span>
  age.innerHTML = family[i].age; //skriver in båd aldrarna i min span
  container.appendChild(name); //lägger till min h3 i min div
  container.appendChild(age); //lägger till min span i min div
  document.body.appendChild(container); //lägger till min div i min body i min DOM
}
