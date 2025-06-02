import { createHtmlElement } from '../html-element/html-element';
import { createButton } from '../button/button';
import { createButtonSet } from '../button-set/button-set';
import { setAddEventListenerToButton } from '../../utils/set-addeventlistener-to-button';

import './mobile-menu.css';

export function createMobileMenu() {
  const mobileMenu = createHtmlElement('div', ['mobile-menu']);
  const buttonSet = document.querySelector('.button-set');
  const cloneArray = [];

  const buttonArray = Array.from(buttonSet.children);
  for (let i = 0; i < buttonArray.length - 1; i += 1) {
    const clone = buttonArray[i].cloneNode(true);
    clone.classList.add('mobile-menu-btn');
    mobileMenu.append(clone);
    cloneArray.push(clone);
  }
  buttonSet.append(mobileMenu);
  setAddEventListenerToButton(...cloneArray);
}

export function removeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.remove();
}
