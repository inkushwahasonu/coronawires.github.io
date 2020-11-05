let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

const fullDate = document.getElementById("fullDate");
const time = document.getElementById("time");

let today = new Date();
let fullyear = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();

fullDate.innerHTML =
  fullyear + " : " + monthList[month] + " : " + date + " : " + dayList[day];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let milliSecond = today.getMilliseconds();

function incremetTime() {
// milliSecond++
// if(milliSecond >= 1000){
//   second++
//   milliSecond = milliSecond - 1000;
// }else{
//   milliSecond;
// }

  second++;  
  if (second >= 60) {
    minute++;
    second = second - 60;
  } else {
    second;
  }

  if (minute >= 60) {
    hour++;
    minute = minute - 60;
  } else {
    minute;
  }

  let prepand = hour >= 12 ? "PM" : "AM";
  hour = hour >= 12 ? hour - 12 : hour;
  if (hour === 0 && prepand === " PM ") {
    if (minute === 0 && second === 0 && milliSecond === 0) {
      hour = 12;
      prepand = "Noon";
    } else {
      hour = 12;
      prepand = "PM";
    }
  }

  if (hour === 0 && prepand === "AM") {
    if (minute === 0 && second === 0 && milliSecond === 0) {
      hour = 12;
      prepand = "Midnight";
    } else {
      hour = 12;
      prepand = "AM";
    }
  }

  time.innerHTML = hour + " " +prepand + " : " +minute + " : " +second + " : " + milliSecond;
}

window.setInterval(incremetTime, 1000 );
