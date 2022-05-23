var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("Bounce");
var button = document.getElementById("random");

function GradientCreation() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value;

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", GradientCreation);
color2.addEventListener("input", GradientCreation);

body.style.background =
  "linear-gradient(to right," + color1.value + "," + color2.value;

css.textContent = body.style.background + ";";

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const value = generateRandomIntegerInRange(111111, 999999);
const value2 = generateRandomIntegerInRange(111111, 999999);

console.log(value);
console.log(value2);

function randomize() {
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const value = generateRandomIntegerInRange(111111, 999999);
  const value2 = generateRandomIntegerInRange(111111, 999999);

  body.style.background = "linear-gradient(to right,#" + value + ",#" + value2;
  css.textContent = body.style.background + ";";

  color1.value = "#" + value;
  color2.value = "#" + value2;
}

button.addEventListener("click", randomize);
