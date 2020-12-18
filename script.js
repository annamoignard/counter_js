let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.minus-one');
let counterPlus = document.querySelector('.plus-one');
let count = 0;

updateDisplay();
// clicks.addEventListener("click", () => {
//   clicks += 1; 
//   document.querySelector("clicks").innerHTML = clicks;
// })

counterMinus.addEventListener("click",() => {
  count -= 1;
  updateDisplay();
});

counterPlus.addEventListener("click",() => {
  count += 1;
  updateDisplay();
});

function updateDisplay(){
  counterDisplay.innerHTML = count;
};