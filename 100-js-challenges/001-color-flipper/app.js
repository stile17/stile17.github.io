const colors = ["red", "green", "#0000ff"];
const hexButton = document.getElementById("hexBtn");
const simpleButton = document.getElementById("simpleBtn");
const changeButton = document.getElementById("changeButton");
const colorText = document.getElementById('colorText');


const setRandomBackgroundColor = () => {
  const randomNumber = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomNumber];
  colorText.textContent = colors[randomNumber];
}

changeButton.addEventListener("click", setRandomBackgroundColor);

setRandomBackgroundColor();