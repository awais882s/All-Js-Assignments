let input = document.getElementById("input");
var originalText =
  "I love my Country.<br> I love my City.<br> I love my Homeland.";
let output = document.getElementById("output");
let originalString = document.getElementById("originalString");
let cities = [
  "Faisalabad",
  "Islamabad",
  "Sargodha",
  "Lahore",
  "Bhera",
  "Jhang",
];

// clear input
function clear_input() {
  input.value = "";
}

// push originalString
originalString.innerHTML =
  "I love my Country.<br> I love my City.<br> I love my Homeland.";

//lowercase
function lowercase() {
  output.innerText = "";

  let result = originalText.toLowerCase();
  output.innerHTML = result;
}

// uppercase
function uppercase() {
  output.innerText = "";

  let result = originalText.toUpperCase();
  output.innerHTML = result;
}

// capitalize
function capitalize() {
  output.innerText = "";

  let result =
    '<span style="text-transform: capitalize;">' + originalText + "</span>";
  output.innerHTML = result;
}

// Better Formating
function format() {
  output.innerText = "";

  if (input.value === "") {
    alert("Please Enter Your Text");
  }
  text = input.value.toLowerCase();
  let result = '<span style="text-transform: capitalize;">' + text + "</span>";
  output.innerHTML = result;
}

// print all cities
function printCities() {
  output.innerText = "";
  for (let i = 0; i < cities.length; i++) {
    let num = i + 1;
    output.innerHTML += num + ")" + cities[i] + "<br>";
  }
}

//add city
function addCity() {
  output.innerText = "";
  let city = input.value;
  let cityFirstLetter = city.slice(0, 1).toUpperCase();
  let cityAllLetter = city.slice(1).toLowerCase();
  let cityCapital = cityFirstLetter + cityAllLetter;
  if (city.length < 3) {
    alert("Please Enter Your City Name Correctly");
    return;
  }
  let cityfound = false;

  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === cityCapital) {
      cityfound = true;
      output.innerHTML =
        '<span style="font-size:20px;color:red;">' +
        cityCapital +
        "</span> is already in the list";
    }
  }
  if (cityfound === false) {
    cities.push(cityCapital);
    output.innerHTML =
      '<span style="font-size:20px;color:green;">' +
      cityCapital +
      "</span> is successfully added in the list";
  }
}

// check City
function checkCity() {
  output.innerText = "";
  let city = input.value;
  let cityFirstLetter = city.slice(0, 1).toUpperCase();
  let cityAllLetter = city.slice(1).toLowerCase();
  let cityCapital = cityFirstLetter + cityAllLetter;
  if (city.length < 3) {
    alert("Please Enter Your City Name Correctly");
    return;
  }
  let cityfound = false;

  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === cityCapital) {
      cityfound = true;
      output.innerHTML =
        '<span style="font-size:20px;color:green;">' +
        cityCapital +
        "</span> is in the list";
    }
  }
  if (cityfound === false) {
    output.innerHTML =
      '<span style="font-size:20px;color:red;">' +
      cityCapital +
      "</span> is not in the list";
  }
}

// find word
function find() {
  output.innerText = "";

  let word = input.value;
  if (!word) {
    alert("Please Enter a word");
    return;
  }
  word = word.toLowerCase();
  let indexOfFoundWord = originalText.toLowerCase().indexOf(word);
  if (indexOfFoundWord !== -1) {
    alert("This word exists");
    output.innerText = indexOfFoundWord;
    return;
  }
  alert("This word does not exists");
}

// replace text
function replace() {
  output.innerText = "";

  let replacedWord = window.prompt(
    "Write a word with which you want to replace the existing word"
  );
  if (!replacedWord) {
    alert("Please enter a word");
    return;
  }
  let originalWord = input.value.toLowerCase();
  if (!originalWord) {
    alert("Write word that has to be replaced");
    return;
  }
  let indexOfFoundWord = originalText.toLowerCase().indexOf(originalWord);
  if (indexOfFoundWord !== -1) {
    let indices = new RegExp(originalWord, "gi");
    output.innerHTML = originalText.replace(indices, replacedWord);
  } else {
    alert("Word does not exist");
  }
}

// clearOutput
function clearOutput() {
  output.innerText = "";
}
