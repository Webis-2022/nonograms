import { createHtmlElement } from '../html-element/html-element';
import './timer.css';

export function createTimer() {
  const timerDiv = createHtmlElement('div', ['timer']);
  const timerValue = createHtmlElement('span', ['timer-value'], '00 : 00');
  timerValue.classList.add('timer-value');
  timerDiv.appendChild(timerValue);
  return timerDiv;
}