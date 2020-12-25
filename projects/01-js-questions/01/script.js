"use strict";

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
  " January",
  " February",
  " March",
  " April",
  " May",
  " June",
  " July",
  " August",
  " September",
  " Octuber",
  " November",
  " December",
];

const fullDate = document.getElementById("fullDate");
const time = document.getElementById("time");

let today = new Date();
let fullyear = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();

fullDate.innerHTML =
  date + "th " + monthList[month] + ", " + fullyear + "  " + dayList[day];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

function incremetTime() {
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

  let period = hour >= 12 ? "PM" : "AM";

  hour = hour >= 12 ? hour - 12 : hour;

  if (hour === 0 && period === "PM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      period = "Noon";
    } else {
      hour = 12;
      period = "PM";
    }
  }

  if (hour === 0 && period === "AM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      period = "Midnight";
    } else {
      hour = 12;
      period = "AM";
    }
  }

  time.innerHTML = hour + " : " + minute + " : " + second + " " + period;
}

window.setInterval(incremetTime, 1000);
