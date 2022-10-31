// concatinate
function concatinate() {
  originalStatement.innerText = "";
  output.innerText = "";

  var a = prompt("Enter first Value");
  var b = prompt("Enter first Value");
  var sum = a + b;
  originalStatement.innerText = "var sum = a + b;";
  output.innerHTML = "<p class='text-center'>" + sum + "</p>";
}

// nameFromUser

function askName() {
  originalStatement.innerText = "";
  output.innerText = "";
  var username = prompt("Please Enter Your Name...");
  if (!username) {
    alert("Please add your Name First...");
    return;
  }
  let quote = "Have a Good Day ";
  let banger = "!";
  let final = quote + username + banger;
  originalStatement.innerHTML =
    "<ul class='text-start'><li>var username = prompt('Please Your Name')</li><li>if(!username){ <br>alert('Please add your Name First...'); <br>return <br>}</li><li>let quote = 'Have a Good Day '</li><li>let banger = '!'</li><li>let final = quote + username + banger;</li></ul>";
  output.innerHTML = '<p class = "text-center">' + final + "</p>";
}

// comparisonOperator

function comparison() {
  originalStatement.innerText = "";
  output.innerText = "";
  alert('If all the values are same it"ll become TRUE');

  var value1 = prompt("Enter First Value");

  if (!value1) {
    output.innerHTML =
      "<p class = 'text-center'>It would not work without first values</p>";
    return;
  }

  var value2 = prompt("Enter Second Value.");

  if (!value2) {
    output.innerHTML =
      "<p class = 'text-center'>It would not work without second values</p>";
    return;
  }

  if (value1 === value2) {
    alert("Your values are same.");
    originalStatement.innerHTML =
      '<ul class="text-start"><li>var value1 = prompt("Enter First Value");</li><li>var value2 = prompt("Enter Second Value.")</li><li>if (value1 == value2) <br>alert("Your values are same."); <br>}';
    output.innerHTML =
      '<p class = "text-center">Your first value is ' +
      value1 +
      " and " +
      "Your second value is " +
      value2 +
      "</p>";
  } else {
    alert("Your values are not same");
    originalStatement.innerHTML =
      '<ul class="text-start"><li>var value1 = prompt("Enter First Value");</li><li>var value2 = prompt("Enter Second Value.")</li><li>if (value1 == value2) <br>alert("Your values are same."); <br>}else{ <br>alert("Your values are not same");<br>}</li></ul>';
    output.innerHTML =
      '<p class = "text-center">Your first value is ' +
      value1 +
      " and " +
      "Your second value is " +
      value2 +
      "</p>";
  }
}

// if-else-if

function ifElseIf() {
  originalStatement.innerText = "";
  output.innerText = "";
  var age = +prompt("Enter Your Age");
  if (age >= 18) {
    var weight = +prompt("Enter your weight");
    if (weight <= 70) {
      output.innerHTML =
        "<p class='text-center'>" + "You Are a Smart Guy" + "</p>";
      originalStatement.innerHTML = "<p> if (age >= 18)</p>";
    } else if (weight >= 70) {
      output.innerHTML =
        "<p class='text-center'>" + "You Are a Fat Guy" + "</p>";
      originalStatement.innerHTML = "<p>else if (weight >= 70)</p>";
    }
  } else {
    output.innerHTML = "<p class='text-center'>" + "You Are a Baby" + "</p>";

    originalStatement.innerHTML = "<p> else </p>";
  }
}

// testingSetsOfConditions

function condition() {
  originalStatement.innerText = "";
  output.innerText = "";

  var age = prompt("Enter your age");
  var weight = prompt("Enter your weight");

  if (age >= 18 && weight <= 70) {
    output.innerHTML =
      "<p class='text-center'>" + "You Are a Smart Guy" + "</p>";
    originalStatement.innerHTML = "<p> if (age >= 18 && weight <= 70) </p>";
  } else if (age >= 18 && weight > 70) {
    output.innerHTML = "<p class='text-center'>" + "You Are a Fat Guy" + "</p>";
    originalStatement.innerHTML =
      "<p> else if (age >= 18 && weight > 70) </p> ";
  } else {
    output.innerHTML = "<p class='text-center'>" + "You Are a Baby" + "</p>";

    originalStatement.innerHTML = "<p>else</p>";
  }
}

// if statement nested
function nested() {
  originalStatement.innerText = "";
  output.innerText = "";

  var age = prompt("Enter your age");

  if (age >= 18) {
    var weight = prompt("Enter your weight");
    if (weight <= 70) {
      output.innerHTML =
        "<p class='text-center'>" + "You Are a Smart Guy" + "</p>";
      originalStatement.innerHTML =
        "<p> if (age >= 18){if (weight <= 70){....}} </p>";
    } else if (weight > 70) {
      output.innerHTML =
        "<p class='text-center'>" + "You Are a fat Man" + "</p>";
      originalStatement.innerHTML =
        "<p> if (age >= 18){if (weight > 70){....}} </p>";
    }
  } else {
    output.innerHTML = "<p class='text-center'>" + "You Are a Baby" + "</p>";
    originalStatement.innerHTML = "<p> else{You Are a Baby} </p>";
  }
}

// login
function login() {
  originalStatement.innerText = "";
  output.innerText = "";
  var username = prompt("Enter Username.Default user name is abc");
  var password = prompt("Enter Password.Default password is 123");

  defaultUsername = "abc";
  defaultPassword = "123";

  if (!username) {
    alert("Please write username");
    return;
  }
  if (!password) {
    alert("Please give password.");
    return;
  }

  if (username == defaultUsername && password == defaultPassword) {
    alert("Logged in");
    originalStatement.innerHTML =
      '<ul class="text-start"><li>var username = prompt("Enter Username.Default user name is abc");</li><li>var password = prompt("Enter Password.Default password is 123")</li><li>defaultUsername = "abc";</li><li>defaultPassword = "123";</li><li>if (username == defaultUsername && password == defaultPassword) { <br>alert("Logged in") <br>}else{ <br>alert("You enter wrong username or password") <br>return; <br>}</li></ul>';

    output.innerHTML = '<p class = "text-center">Logged in</p>';
  } else {
    alert("You enter wrong username or password!");
    return;
  }
}

function clearStatement() {
  originalStatement.innerText = "";
}
function clearOutput() {
  output.innerText = "";
}
