import { createHtmlElement } from '../html-element/html-element';
import { createButton } from '../button/button';
import './modal-window.css';

export function createModalWindow() {
  const modalWindow = createHtmlElement('dialog', ['modal-window']);
  const modalWindowText = createHtmlElement('p', ['modal-window-text']);
  modalWindowText.textContent = 'You Win!';
  const modalWindowButton = createButton('modal-window-button', 'Close');
  modalWindowButton.addEventListener('click', () => {
    modalWindow.close();
  });
  modalWindow.append(modalWindowText, modalWindowButton);
  document.body.append(modalWindow);
  modalWindow.showModal();
}