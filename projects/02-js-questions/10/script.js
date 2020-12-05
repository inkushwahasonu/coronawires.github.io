const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
const result = document.getElementById("result");

function multi() {
 
  let mul = num1 * num2;
  result.innerHTML = mul;
}
function division(event2) {
  event2.preventDefault();
}
function reset(event3) {
  event3.preventDefault();
}
