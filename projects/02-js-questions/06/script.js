function leapyear(event) {
  event.preventDefault();
  const year = Number(document.getElementById("year").value);
  const result = document.getElementById("result");
  let leapyear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

  let message =
    leapyear == true
      ? (result.innerHTML = "yes! " + year + " is a leap year...")
      (result.classList.add("true"),
      result.classList.remove("false"))
       
      
      : (result.innerHTML = "No! " + year + " is not a leap year...")(
          result.classList.add("false"),
        result.classList.remove("true"));
  result.innerHTML = message;
}
