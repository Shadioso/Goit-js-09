import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector(`input`);
const startBtn = document.querySelector(`button[data-start]`);
const day = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const dateChosen = document.querySelector('#datetime-picker');
//
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  timeId: null,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      startBtn.disabled = true;
      return alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener(`click`, startTimer);
      function startTimer() {
        this.timeId = setInterval(() => {
          const distance = selectedDates[0] - new Date();
          const timeComponents = convertMs(distance);
          updateClockFace(timeComponents);
          if (distance < 1000) {
            clearInterval(timeId);
            startBtn.disabled = false;
          }
        }, 1000);
      }
    }
  },
};

flatpickr(dateChosen, options);

function updateClockFace({
  days: daysValue,
  hours: hoursValue,
  minutes: minutesValue,
  seconds: secondsValue,
}) {
  day.textContent = `${daysValue}`;
  hours.textContent = `${hoursValue}`;
  minutes.textContent = `${minutesValue}`;
  seconds.textContent = `${secondsValue}`;
}

function makeToZero(value) {
  return String(value).padStart(2, '0');
}

//
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = makeToZero(Math.floor(ms / day));
  const hours = makeToZero(Math.floor((ms % day) / hour));
  const minutes = makeToZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = makeToZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
