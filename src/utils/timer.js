// eslint-disable-next-line import/newline-after-import, import/no-cycle
import { timerState } from '../components/playground/playground';
let timerId;

export function startTimer() {
  const timer = document.querySelector('.timer-value');
  const currentMinutes = timer.textContent.split(':')[0];
  const currentSeconds = timer.textContent.split(':')[1];
  let minutes = `0${0}`;
  let counter = currentSeconds === '00' ? 0 : Number(currentSeconds);
  if (timerState.wasTimerStartedBefore) {
    timerId = setInterval(() => {
      counter += 1;
      if (counter > 59) {
        minutes = Number(minutes) + 1;
        minutes = Number(minutes) < 10 ? `0${Number(minutes)}` : Number(minutes);
        counter = 0;
      }
      const seconds = counter < 10 ? `0${counter}` : counter;
      timer.textContent = `${minutes}:${seconds}`;
    }, 1000);
  }
}

export function clearTimer(value = '00:00') {
  clearInterval(timerId);
  const timerValue = document.querySelector('.timer-value');
  timerValue.textContent = value;
}