import { createHtmlElement } from '../html-element/html-element';
import { createButton } from '../button/button';
import './button-set.css';
import { setAddEventListenerToButton } from '../../utils/set-addeventlistener-to-button';
// eslint-disable-next-line import/no-cycle
import { menuToggleHandler } from '../../button-handlers/button-handlers';


export function createButtonSet(placeToInsert) {
  const buttonSet = createHtmlElement('div', ['button-set']);
  const resetButton = createButton('reset-button', 'Reset Game');

  const saveButton = createButton('save-button', 'Save Game');

  const loadButton = createButton('load-button', 'Load Game');
  loadButton.setAttribute('disabled', '');

  const showSolutionButton = createButton('show-solution-button', 'Solution');

  const menuToggle = createHtmlElement('button', ['menu-toggle'], '☰');
  menuToggle.addEventListener('click', menuToggleHandler);
  setAddEventListenerToButton(resetButton, saveButton, loadButton, showSolutionButton);
  document.addEventListener('click', (event) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && !menuToggle.contains(event.target)) {
      mobileMenu.remove();
    }
  });

  buttonSet.append(resetButton, saveButton, loadButton, showSolutionButton, menuToggle);
  placeToInsert.append(buttonSet);
}