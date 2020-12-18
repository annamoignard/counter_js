let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.minus-one');
let counterPlus = document.querySelector('.plus-one');
let count = 0;

updateDisplay();

counterMinus.addEventListener("click", () => {
  count -= 1;
  updateDisplay();
  document.getElementById('random-color').style.color = randomColor();
});

counterPlus.addEventListener("click", () => {
  count += 1;
  updateDisplay();
  document.getElementById('random-color').style.color = randomColor();
});

function updateDisplay() {
  counterDisplay.innerHTML = count;
};

function randomColor() {
  return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
}; 


