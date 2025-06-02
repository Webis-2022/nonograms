import { addUserAnswersToArray } from './create-user-answers-array';

export function saveData() {
  localStorage.removeItem('userAnswersArray');
  const userAnswersArray = addUserAnswersToArray();
  const timerValue = document.querySelector('.timer-value').textContent;
  localStorage.setItem(
    'userData',
    JSON.stringify({
      timer: timerValue,
      userAnswersArray,
    })
  );
}