"use strict"

const label = document.querySelector("#label");

label.addEventListener('click', 
  ()=>{
    const search = document.querySelector("#search");
    search.classList.toggle("searchOn");
  }
)

