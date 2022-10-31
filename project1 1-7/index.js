alert('Please write your name and favourite number.')
var username = prompt("Enter Your Name", "Abdullah");

if(!username){
 alert("if you can't write your name.It will reload Automatically and you don't do anything on this site")
 window.location.reload()
}
var number = parseInt(prompt("Enter Your Favourite number", "1"))
if(!number){
    alert('Reload Automatically')
    window.location.reload()
   }


// Get elements
var alertName = document.getElementById("alertName");
var alertNumber = document.getElementById("alertNumber");
var showTheVariableName = document.getElementById("showVariableName");
var showRulesOfCamelCase = document.getElementById("showCamelCaseRules");
var sumTwoNumbers = document.getElementById("sumTwoNumbers");
var subtractTwoNumbers = document.getElementById("subtractTwoNumbers");
var multiplyTwoNumbers = document.getElementById("multiplyTwoNumbers");
var divideNmbers = document.getElementById("divideNumbers");
var calculateSomeNumbers = document.getElementById('calculateSomeNumbers');
var clearTheStatement = document.getElementById("clearStatement");
var originalStatement = document.getElementById("originalStatement");
var output = document.getElementById("output");
var clearTheOutput = document.getElementById("clearOutput");


// EventLiseners

alertName.addEventListener('click' , alertUserName);
alertNumber.addEventListener('click' , alertUserNumber);
showTheVariableName.addEventListener('click' , showVariableName);
showRulesOfCamelCase.addEventListener('click' , showCamelCaseRules);
sumTwoNumbers.addEventListener('click' , sumOfTwoNumbers);
subtractTwoNumbers.addEventListener('click' , subtractNumbers);
multiplyTwoNumbers.addEventListener('click' , multiplyNumbers);
divideNmbers.addEventListener('click' , divideTwoNumbers)
calculateSomeNumbers.addEventListener('click' , CalculateNumbers)
clearTheStatement.addEventListener('click' , clearStatement)
clearTheOutput.addEventListener('click' , clearOutput)

// Event Functions


// Alert Name
function alertUserName(){
    originalStatement.innerText = "";
    output.innerText = "";


    console.log("Check");
    if(!username) {
    alert("enter user name")
        return
    }

    alert(username);
    originalStatement.innerText = ("alert('userName');")
    output.innerHTML = ("<p class='text-center'>" + username     + "</p>")
}
// Alert Number
function alertUserNumber(){
    originalStatement.innerText = "";
    output.innerText = "";


    alert(number);
    originalStatement.innerText = ("alert('userNumber');");
    output.innerHTML = ("<p class='text-center'>" + number + "</p>")
}

// showVariableName
function showVariableName(){
    originalStatement.innerText = "";
    output.innerText = "";

    output.innerHTML = "<ul><li>Variable names cannot contain spaces.</li><li>Variable names are case-sensitive.</li><li>Variable names can only contain letters, numbers, underscores, or dollar signs.</li><li>Variable names must begin with a letter, an underscore (_) or a dollar sign ($).</li></ul>"
}

// showCamelCaseRules

function showCamelCaseRules(){
    originalStatement.innerText = "";
    output.innerText = "";


    output.innerHTML = ('<h3 class="text-start">Basic Camel Case Capitalization Rules</h3><ul class="text-start"><li>The first letter is capitalized.</li><li>One or more letters in that word are also capitalised.</li><li>The word does not end on a capitalized letter: CamelCasE.</li><li>No two capitalised letters shall follow directly each other: CamelCAse.</li><li>No number in that word at any place: CamelCase1more.</li><li>No dot(.),</li></ul>')
}

// sumTwoNumbers
function sumOfTwoNumbers(){
    originalStatement.innerText = "";
    output.innerText = "";


    let a = 10;
    let b = 10;
    let c = a + b;
    originalStatement.innerHTML = "<p>var a = 10;</br>var b = 10;</br>var c = a + b;</p>"
    output.innerHTML = "<p class = 'text-center'>" + c +"</p>";
}

// subtractOfTwoNumbers
function subtractNumbers(){
    originalStatement.innerText = "";
    output.innerText = "";


    let a = 100;
    let b = 57;
    let c = a - b;
    originalStatement.innerHTML = "<p>var a = 10;</br>var b = 5;</br>var c = a - b;</p>"
    output.innerHTML = "<p class = 'text-center'>" + c +"</p>";
}

// multiplyNumbers
function multiplyNumbers(){
    originalStatement.innerText = "";
    output.innerText = "";


    let a = 30;
    let b = 58;
    let c = a * b;
    originalStatement.innerHTML = "<p>var a = 10;</br>var b = 5;</br>var c = a * b;</p>"
    output.innerHTML = "<p class = 'text-center'>" + c +"</p>";
}

// divideNumbers
function divideTwoNumbers(){
    originalStatement.innerText = "";
    output.innerText = "";


    let a = 190;
    let b = 57;
    let c = a / b;
    originalStatement.innerHTML = "<p>var a = 100;</br>var b = 5;</br>var c = a / b;</p>"
    output.innerHTML = "<p class = 'text-center'>" + c +"</p>";
}


// calculateSomeNumbers
function CalculateNumbers(){
    originalStatement.innerText = "";
    output.innerText = "";


    let a = 57;
    let b = 78 ;
    let c = 9;
    let d = 2;
    let e = a * b + c - d;
    originalStatement.innerHTML = "<p>var a = 100;</br>var b = 5;</br>var c = 20;</br>var d = 8;</br>var e = a * b + c - d;</p>"
    output.innerHTML = "<p class = 'text-center'>" + e +"</p>";
}

function clearStatement(){
    originalStatement.innerText = "";

}
function clearOutput(){
    output.innerText = "";
}