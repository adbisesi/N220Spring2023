
let input = document.querySelector("input");
let btnCheck = document.querySelector("button");
let output = document.querySelector("h1");

btnCheck.addEventListener("click", () => {
  let num = Number(input.value);
  let result = num % 7 === 0 ? "Yes" : "No";
  output.innerText = result;
});