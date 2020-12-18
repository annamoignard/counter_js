let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.minus-one');
let counterPlus = document.querySelector('.plus-one');
let count = 0;

// clicks.addEventListener("click", () => {
//   clicks += 1; 
//   document.querySelector("clicks").innerHTML = clicks;
// })

counterMinus.addEventListener("click",() => {
  count -= 1;
  counterDisplay.innerHTML = count;
});

counterPlus.addEventListener("click",() => {
  count += 1;
  counterDisplay.innerHTML = count;
});
