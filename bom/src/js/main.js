window.onload = function () {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", openWindow);

  let newButton = document.getElementById("anotherBtn");
  newButton.addEventListener("click", closeWindow);

  let historyButton = document.getElementById("historyBtn");
  historyButton.addEventListener("click", goBack);

  let intervalBtn = document.getElementById("intervalBtn");
  intervalBtn.addEventListener("click", intervalButton);

  let stopButton = document.getElementById("stopBtn");
  stopButton.addEventListener("click", clearButton);

  let myNav = window.navigator;
  console.log(myNav);
};

function openWindow() {
  window.open("https://www.w3schools.com/js/js_timing.asp");
}

function closeWindow() {
  window.close();
}

function goBack() {
  history.back();
}
let aNumber = 0;
function intervalButton() {
  aNumber = setInterval(() => {
    console.log("hej");
  }, 1000);
}

function clearButton() {
  clearInterval(aNumber);
}

let watchNumberThingy = 0;
function showPosition() {
  if (navigator.geolocation) {
    watchNumberThingy = navigator.geolocation.getCurrentPosition(
      success,
      error
    );
  }
  function success(position) {
    let lat = position.coords.latitude;
    let lang = position.coords.longitude;
    console.log(position);
    console.log(lat);
    console.log(lang);
  }

  function error(message) {
    console.log(message);
  }
}

showPosition();
