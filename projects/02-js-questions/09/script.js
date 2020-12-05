const newChristmas = document.getElementById("newChristmas");
const message = document.getElementById("message");

let d = new Date();

const cmas = new Date(d.getFullYear(), 11, 25);
newChristmas.innerHTML = cmas;
if (d.getMonth() == 11 && d.getDay() > 25) {
  cmas.setFullYear(cmas.getFullYear + 1);
}
const one_day = 1000 * 60 * 60 * 24;

message.innerHTML =
  Math.ceil((cmas.getTime() - d.getTime()) / one_day) +
  " day's left until christmas!";
