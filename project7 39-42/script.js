let inputField = document.getElementById("input");
let output = document.getElementById("output");
let para = document.getElementById("para");
let dateRightNow = new Date();

// digital clock
setInterval(() => {
  setTimeout(() => {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // 24 Hours to 12 Hours
    if (h > 12) {
      h = h - 12;
    }


    // zero before single digit number
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

  }, 1000);
}, 1000);



// Daynames
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// clear input
function clear_input() {
  input.value = "";
}

// push originalString
originalString.innerHTML = dateRightNow;


// ifElse
function ifElse() {
  let today = new Date().getDay()
  if (today === 0) {
    toastMsg({ text: "It's Sunday", position: "center", gravity: "bottom", color: ["#bde0fe", "#a2d2ff"] });
    output.innerText = "Sunday"
  } else if (today === 1) {
    toastMsg({ text: "It's Monday", position: "center", gravity: "bottom", color: ["#bde0fe", "#a2d2ff"] });
    output.innerText = "Monday"
  } else if (today === 3) {
    toastMsg({ text: "It's Wednesday", position: "center", gravity: "bottom", color: ["#bde0fe", "#a2d2ff"] });
    output.innerText = "Wednesday"
  } else if (today === 4) {
    toastMsg({ text: "It's Thursday", position: "center", gravity: "bottom", color: ["#bde0fe", "#a2d2ff"] });
    output.innerText = "Thursday"
  } else if (today === 5) {
    toastMsg({ text: "It's Friday", position: "center", gravity: "bottom", color: ["#bde0fe", "#a2d2ff"] });
    output.innerText = "Friday"
  } else {
    toastMsg({ text: "It's Some Other Day", position: "center", gravity: "bottom", color: ["#bde0fe", "#a2d2ff"] });
  }
}


// Switch
function switch_() {
  let today = new Date().getDay()
  switch (today) {
    case 0:
      output.innerText = "It's Sunday";
      toastMsg({ text: "It's Sunday by Switch Function", position: "center", gravity: "bottom", color: ["#fb5607", "#ff006e"] });
      break;
    case 1:
      output.innerText = "It's Monday"
      toastMsg({ text: "It's Monday by Switch Function", position: "center", gravity: "bottom", color: ["#fb5607", "#ff006e"] });
      break;
    case 3:
      output.innerText = "It's Wednesday"
      toastMsg({ text: "It's Wednesday by Switch Function", position: "center", gravity: "bottom", color: ["#fb5607", "#ff006e"] });
      break;
    case 4:
      output.innerText = "It's Thursday"
      toastMsg({ text: "It's Thursday by Switch Function", position: "center", gravity: "bottom", color: ["#fb5607", "#ff006e"] });
      break;
    case 5:
      output.innerText = "It's Friday"
      toastMsg({ text: "It's Firday by Switch Function", position: "center", gravity: "bottom", color: ["#fb5607", "#ff006e"] });
      break;
    default:
      output.innerText = "It's Some Other Day";
      break;
  }
}

// do while

function do_while() {


  do {
    var name = prompt("Enter Your Name...")
    output.innerText = name
  } while (name === null || name === "")

}


// clearOutput
function clearOutput() {
  output.innerText = "";
  para.innerText = "";
}

// toastify
function toastMsg({ text, gravity, position, color }) {
  if (!text) return alert("Text is Required")
  if (!gravity) return alert("gravity is Required")
  if (!position) return alert("position is Required")
  if (!color || color?.length < 2) return alert("color is Required")
  Toastify({
    text,
    // text: "This is a toast",
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity, // `top` or `bottom`
    // gravity: "top", // `top` or `bottom`
    // position: "left", // `left`, `center` or `right`
    position, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: `linear-gradient(to right, ${color[0] || "#00b09b"}, ${color[1] || "#96c93d"})`,
    }
    // onClick: function(){} // Callback after click
  }).showToast();
}