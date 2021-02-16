"use strict"

const fnum =document.getElementById("fnum");
const snum =document.getElementById("snum");
const add = document.getElementById("add");
const mul = document.getElementById("mul");
const mess = document.getElementById("mess");


let addition = (event) => {
event.preventDefault();
let addNum = +fnum.value + +snum.value;
mess.innerHTML = addNum;
}

let multiplication = (event) => {
event.preventDefault();
let mulNum = +fnum.value * +snum.value;
mess.innerHTML = mulNum;
}


add.addEventListener('click', addition);
mul.addEventListener('click', multiplication);


