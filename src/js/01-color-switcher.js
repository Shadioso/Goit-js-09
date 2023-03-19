function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//
const body = document.querySelector(`body`);
const startBtn = document.querySelector(`button[data-start]`);
const closeBtn = document.querySelector(`button[data-stop]`);
//

const changeColor = () => {
  startBtn.disabled = true;
  timeOutId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};
const stopChanheColor = () => {
  startBtn.disabled = false;
  clearInterval(timeOutId);
};
//
startBtn.addEventListener(`click`, changeColor);
closeBtn.addEventListener(`click`, stopChanheColor);
