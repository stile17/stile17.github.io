var counter = 0;
const decreaseButton = document.getElementsByClassName("decrease")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const increaseButton = document.getElementsByClassName("increase")[0];
const counterText = document.getElementById("value");

const changeCounter = (action) => {
  switch (action) {
    case 'decrease':
      counter--;
      break;
    case 'reset':
      counter = 0;
      break;
    case 'increase':
      counter++;
      break;
    default:
      break;
  }
  counterText.innerText = counter;

  if(counter < 0){
    counterText.style.color = "red";
  }
  if(counter === 0){
    counterText.style.color = "#222";
  }
  if(counter > 0){
    counterText.style.color = "green";
  }

};

decreaseButton.addEventListener('click', () => changeCounter('decrease'));
resetButton.addEventListener('click', () => changeCounter('reset'));
increaseButton.addEventListener('click', () => changeCounter('increase'));
