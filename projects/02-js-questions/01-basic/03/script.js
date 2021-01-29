"use strict";
const current_date_1 = document.getElementById("current_date_1");
const current_date_2 = document.getElementById("current_date_2");
const current_date_3 = document.getElementById("current_date_3");
const current_date_4 = document.getElementById("current_date_4");
const current_date_5 = document.getElementById("current_date_5");
let monthName = [
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
let dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let day = currentDate.getDay();
if (date <= 9) {
  date = "0" + date;
}

current_date_1.innerHTML =
  year + " : " + monthName[month] + " : " + date + " : " + dayName[day];
current_date_2.innerHTML =
  year + " - " + monthName[month] + " - " + date + " - " + dayName[day];
current_date_3.innerHTML =
  year + " / " + monthName[month] + " / " + date + " / " + dayName[day];
current_date_4.innerHTML =
  monthName[month] + " " + date + "th, " + year + ", " + dayName[day];
current_date_5.innerHTML =
  date + "th " + monthName[month] + ", " + year + ", " + dayName[day];
