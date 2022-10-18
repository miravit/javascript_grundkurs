let animals = ["katt", "hund", "fisk", "zebra" ]
let theList = document.getElementById("list-tag");


for (i=0; i<animals.length; i++) {
//theList.innerHTML += "<li>"+animals[i]+"</li>";
let newLink = document.createElement("li")
newLink.innerText += animals[i];
theList.appendChild(newLink)






}