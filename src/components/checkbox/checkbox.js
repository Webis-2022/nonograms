import { changeSoundVariableValueInLocalStorage } from '../../utils/change-sound-variable-value-in-local-storage';

export function createCheckbox() {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('sound');
  const soundStatement = localStorage.getItem('isSoundEnabled');
  if (soundStatement === 'false') {
    checkbox.checked = false;
  } else {
    checkbox.checked = true;
  }
  checkbox.addEventListener('change', () => {
    if (checkbox.checked === false) {
      changeSoundVariableValueInLocalStorage(false);
    } else {
      changeSoundVariableValueInLocalStorage(true);
    }
  });

  return checkbox;
}