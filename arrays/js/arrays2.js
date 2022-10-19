let animals = ["katt", "hund", "fisk", "zebra" ]
let theList = document.getElementById("list-tag");


for (i=0; i<animals.length; i++) {
//theList.innerHTML += "<li>"+animals[i]+"</li>";
let newLink = document.createElement("li")
newLink.innerText += animals[i];
theList.appendChild(newLink)

}

//let userInput = document.getElementById("userinput");
//let userButton = document.getElementById("userbutton");
//let textOutput = document.getElementById("textarea")

//userButton.addEventListener("click", userName);

//function userName() {
    //let userText = Number(userInput.value);
   // if (userText<18) {
       // document.body.innerHTML+="Du får tyvärr inte besöka denna sida";
    //}
    //else  {
        //if (userText>=18) {
           // document.body.innerHTML+="Välkommen";
        
           
        //}
        
    //}
//}

let numbers = [1,3,4,5,22,2,2,2,6,8];

let found = false;
let pos = 0;

function hej () {
for (let i=0; i<numbers.length; i++){      
    console.log(numbers[i]) 
	if (numbers [i]===2){
                pos=i;
               found=true;
               document.body.innerHTML+="Du hittade en tvåa på position " +pos + " ";
               
               
               
	}
}
}

if (found) {
numbers.splice(pos,1);
} 
hej()



