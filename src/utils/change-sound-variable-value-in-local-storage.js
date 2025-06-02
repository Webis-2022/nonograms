export function changeSoundVariableValueInLocalStorage(statement) {
  let soundStatement = localStorage.getItem('isSoundEnabled');
  soundStatement = statement;
  localStorage.setItem('isSoundEnabled', soundStatement);
}