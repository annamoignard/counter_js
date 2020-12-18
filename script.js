let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.minus-one');
let counterPlus = document.querySelector('.plus-one');
let count = 0;
let randomColor = 0;

updateDisplay();

counterMinus.addEventListener("click", () => {
  count -= 1;
  updateDisplay();
});

counterPlus.addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.innerHTML = count;
};

function randomize() {
  document.getElementById('random-color').style.color = randomColor;
}; 

randomColor.addEventListener('Click', () => {
  return 'hsl(' + (360 * Math.random()) + ',50%,50%)';
  //   return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
});

// function randomColor() {
//   return 'hsl(' + (360 * Math.random()) + ',50%,50%)';
// };


// counterPlus.addEventListener('onClick', randomColor => {
//   document.querySelector(".counter-display").style.color = newColor;
// }
