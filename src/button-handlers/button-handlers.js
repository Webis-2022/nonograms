import {
  createTemplateSizeSelectionPage,
} from '../views/template-size-selection-page/template-size-selection-page';

import {
  smallFields,
  middleFields,
  bigFields,
} from '../views/template-selection-page/template-selection-page';
import { navigateTo } from '../utils/navigate';
import { addUserAnswersToArray } from '../utils/create-user-answers-array';
import { retrieveSavedDraw } from '../utils/retrieve-saved-draw';
import { clearPlayground } from '../utils/clear-playground';
import { showSolution } from '../utils/show-solution';
import { saveData } from '../utils/save-data';
import { clearTimer, startTimer } from '../utils/timer';
import { retrieveTimerValue } from '../utils/retrieve-timer-value';
import { timerState } from '../components/playground/playground';
import { createMobileMenu, removeMobileMenu } from '../components/mobile-menu/mobile-menu';

export function returnButtonHandler() {
  createTemplateSizeSelectionPage();
}

export function selectRandomTemplateButtonHandler() {
  const fieldSizeArr = ['5x5', '10x10', '15x15'];
  const index = Math.floor(Math.random() * 3);
  const randomSize = fieldSizeArr[index];
  const randomTemplate = Math.floor(Math.random() * 5);
  localStorage.setItem('buttonNumber', randomTemplate);
  localStorage.setItem('fieldSize', randomSize);
  navigateTo('/game', randomSize, randomTemplate);
}

export function resetButtonHandler() {
  clearPlayground();
  addUserAnswersToArray();
  clearTimer();
  timerState.isTimerStarted = false;
}

export function saveButtonHandler() {
  saveData();
  const loadButton = document.querySelector('.load-button');
  loadButton.removeAttribute('disabled');
}

export function loadButtonHandler() {
  timerState.isTimerStarted = false;
  timerState.wasTimerStartedBefore = timerState.isTimerStarted;
  clearTimer();
  clearPlayground();
  retrieveTimerValue();
  retrieveSavedDraw();
  setTimeout(() => {
    timerState.wasTimerStartedBefore = true;
    startTimer();
  }, 400);
}

export function showSolutionButtonHandler() {
  clearPlayground();
  showSolution();
}

export function menuToggleHandler() {
  const mobileMenu = document.querySelector('.mobile-menu');
  // eslint-disable-next-line no-unused-expressions
  mobileMenu ? removeMobileMenu() : createMobileMenu();
}