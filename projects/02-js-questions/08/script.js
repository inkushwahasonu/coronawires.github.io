const userInput = document.getElementById("userInput");
const result = document.getElementById("result");
const randNum = document.getElementById("randNum");

function play(event) {
  event.preventDefault();
  let num = Math.ceil(Math.random() * 10);
  randNum.innerHTML = num;
  if (num == userInput.value) {
    result.innerHTML = "Data Matched...";
    result.classList.add("true");
    result.classList.remove("false");
  } else {
    result.classList.remove("true");
    result.classList.add("false");
    result.innerHTML = "OPP'S! Not Matched.";
  }
}
function reset(event1) {
  event1.preventDefault();
  const reset = document.getElementById("reset");
  reset.reset();
}
