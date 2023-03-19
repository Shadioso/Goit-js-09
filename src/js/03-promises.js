import Notiflix from 'notiflix';

const firstDelay = document.querySelector(`input[name=delay]`);
const step = document.querySelector(`input[name=step]`);
const amount = document.querySelector(`input[name=amount]`);
const button = document.querySelector(`button`);
const form = document.querySelector(`form`);
//
const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const onSubmitForm = evt => {
  evt.preventDefault();
  let firstDelayValue = firstDelay.valueAsNumber;
  const stepValue = step.valueAsNumber;
  const amountValue = amount.valueAsNumber;

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, firstDelayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelayValue += stepValue;
  }
};
//
form.addEventListener(`submit`, onSubmitForm);
