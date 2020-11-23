function triangleArea(event) {
  event.preventDefault();
  const firstLength = document.getElementById("firstLength");
  const secondLength = document.getElementById("secondLength");
  const thirdLength = document.getElementById("thirdLength");
  const resultText = document.getElementById("resultText");
  const result = document.getElementById("resultValue");

  let side1 = Number(firstLength.value);
  let side2 = Number(secondLength.value);
  let side3 = Number(thirdLength.value);
  let s = (side1 + side2 + side3)/2;
  let area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

  resultText.classList.add("resultText");
  resultText.innerHTML = "Area of triangle is  : ";
  resultValue.classList.add("resultValue");
  result.innerHTML = area;
}
