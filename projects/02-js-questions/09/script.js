const newChristmas = document.getElementById('newChristmas');

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
newChristmas.innerHTML = date + " : " + month + " : " + year;