export function retrieveTimerValue() {
  const savedTimerValue = JSON.parse(localStorage.getItem('userData'));
  const { timer } = savedTimerValue;
  const timerValue = document.querySelector('.timer-value');
  timerValue.textContent = timer;
}