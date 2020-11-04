
const dayName = document.getElementById("dayName");
const time = document.getElementById("time");
let today = new Date();
let day = today.getDay();
let dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
dayName.innerHTML = dayList[day] +" .";

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let milliSecond = today.getMilliseconds();
let prepand = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour ;
if (hour === 0 && prepand === ' PM '){
  if(minute === 0 && second === 0 && milliSecond === 0){
    hour = 12;
    prepand = 'Noon';
  }else{
    hour = 12;
    prepand = 'PM';
  }
}

if(hour === 0 && prepand ==='AM'){
  if(minute === 0 && second === 0 && milliSecond === 0){
    hour = 12;
    prepand = 'Midnight';
  }
  else{
    hour = 12 ;
    prepand = 'AM';
  }
}

time.innerHTML = hour +" " + prepand + " : " + minute + " : " + second + " : " + milliSecond 