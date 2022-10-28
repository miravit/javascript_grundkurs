//leta efter siffror och lägger i localStorage

function search(theList, searchFor) {
  for (let i = 0; i < theList.length; i++) {
    if (theList[i] === searchFor) {
      let numberToString = JSON.stringify(theList[i]);
      localStorage.setItem("hittad siffra", numberToString); //kan bara sätta en?
      console.log("du hittade " + theList[i], "på plats ", i);
      //return theList[i];
    }
  }
  return -1;
}
let numbers = [1, 1, 2, 3, 5, 8];
search(numbers, 1);
