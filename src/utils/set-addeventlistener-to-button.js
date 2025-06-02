// eslint-disable-next-line import/no-cycle
import {
  saveButtonHandler,
  loadButtonHandler,
  resetButtonHandler,
  showSolutionButtonHandler,
} from '../button-handlers/button-handlers';

export function setAddEventListenerToButton(
  resetButton,
  saveButton,
  loadButton,
  showSolutionButton
) {
  resetButton.addEventListener('click', resetButtonHandler);
  saveButton.addEventListener('click', saveButtonHandler);
  loadButton.addEventListener('click', loadButtonHandler);
  showSolutionButton.addEventListener('click', showSolutionButtonHandler);
}