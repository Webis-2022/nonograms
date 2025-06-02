import { createHtmlElement } from '../html-element/html-element';
import './button.css';

export function createButton(className, text) {
  const button = createHtmlElement('button', [className], text);
  return button;
}