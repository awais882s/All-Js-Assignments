let input = document.getElementById("input");
let para = document.getElementById("para");

// clear input
function clear_input() {
  input.value = "";
}

// push originalString
originalString.innerHTML = "26.54321";

// round a number
function round() {
  let number = input.value;
  if (!number) {
    alert("Please Enter a Number");
  } else {
    number = Math.round(number);
    output.innerText = number;
  }
}
// ceil a number
function ceil() {
  let number = input.value;
  if (!number) {
    alert("Please Enter a Number");
  } else {
    number = Math.ceil(number);
    output.innerText = number;
  }
}
// floor a number
function floor() {
  let number = input.value;
  if (!number) {
    alert("Please Enter a Number");
  } else {
    number = Math.floor(number);
    output.innerText = number;
  }
}

//random
function random() {
  output.innerText = "";
  let number = Math.random();
  output.innerText = number;
}

// dice
function dice() {
  output.innerText = "";
  var randomNumber = Math.random();
  randomNumber = randomNumber * 6 + 1;

  let dice = Math.floor(randomNumber);
  output.innerText = dice;
  para.innerText = "Generating Random Numbers From 1 to 6";
}

// generate password
function password() {
  let randomPass = "";
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-={}[]';|.,/";
  let limit = input.value;
  if (!limit) {
    alert("Please Enter a length for your PASSWORD");
    return;
  } else {
    for (let i = 0; i < limit; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      randomPass += chars.substring(randomNumber, randomNumber + 1);
      // randomPass = randomPass + chars.substring(randomNumber, randomNumber + 1);

      output.innerText = randomPass;
    }
    para.innerText =
      'Generating a random PASSWORD whose length is : " ' + limit + ' "';
  }
}
// convert
// convertingStrings

function convert() {
  let num = input.value;

  if (!num) {
    alert("Please Enter a Number");
    return;
  } else {
    num = parseInt(num);
    output.innerHTML = num;
    para.innerText =
      "Default value of input Field is String. parseInt() converts string into numbers";
    return;
  }
}

// controlling length
function control() {
  let num = input.value;
  if (!num) {
    alert("Please Enter A Number In INPUT-FIELD");
    return;
  } else {
    let limit = +prompt("Enter a Number");
    if (!limit) {
      alert("Please Enter A Number For Limit");
      return;
    }

    num = Number(num);
    num = num.toFixed(limit);
    num = Number(num);

    output.innerText = num;
    para.innerText = "It can write Your Number upto Two Given Places";
  }
}

// calculate gst
function gst() {
  let cost = input.value;

  if (!cost) {
    alert("Please Write Your Cost");
    return;
  }
  cost = Number(cost);
  let tax = cost * (17 / 100);
  let totalCost = cost + tax;
  totalCost = Math.round(totalCost);
  output.innerText = totalCost;
  para.innerHTML =
    "<p class = 'text-center m-0'>Your Bill = " +
    cost +
    "</p> <br> <p class = 'text-center m-0'>Tax 17% = " +
    tax +
    "</p> <br> <p class = 'text-center m-0'>Total Amount including tax = " +
    totalCost +
    "</p>";
}

// clearOutput
function clearOutput() {
  output.innerText = "";
  para.innerText = "";
}
