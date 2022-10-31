let input = document.getElementById("input")
let output = document.getElementById("output")
let cities=["Faisalabad", "Islamabad", "Sargodha", "Lahore", "Bhera", "Jhang" ]

function clear_input(){
   input.value=""
  
}

// simple alert
function simpleAlert(){
    output.innerText=""
    if(!input.value){
    alert("Please Enter a Value in INPUT section")
   }else{
    alert(input.value)
   }
}
// print name
function printName(){
    output.innerText=""
    output.innerText= input.value
}
// Print Cities
function printCities(){
    output.innerText=""
    for (let i = 0; i < cities.length; i++){
        let num = i + 1;
        output.innerHTML += num + ')' + cities[i]+ '<br>'
    }
    
}
// add city
function addCity(){
    output.innerText="";
    cities.push(input.value)
     for (let i = 0; i < cities.length; i++){
        let num = i + 1;
        output.innerHTML += num + ')' + cities[i]+ '<br>'
    }
}




table
function table(){
let number = +prompt("Enter a Number")
    output.innerText="";

for(let i=1; i <= 10; i++) {
     output.innerHTML += number + " * " + i + " = " + i * number + "<br>" ; 

}
}





// clear output
function clearOutput(){
    output.innerText=""
}