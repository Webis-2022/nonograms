import { clearPage } from './clear-page';
import { createTemplateSizeSelectionPage } from '../views/template-size-selection-page/template-size-selection-page';
import { createTemplateSelectionPage } from '../views/template-selection-page/template-selection-page';
import { createStartPage } from '../views/start-page/start-page';
import { createGamePage } from '../views/game-page/game-page';
import { create404Page } from '../views/404-page/404-page';


function renderRoute(path, buttonNumber, defaultFieldSize) {
  clearPage();
  setTimeout(() => {
    switch (path) {
      case '/template-size-selection': {
        createTemplateSizeSelectionPage();
        break;
      }
      case '/template-selection': {
        console.log('DFS', defaultFieldSize)
        createTemplateSelectionPage(defaultFieldSize);
        break;
      }
      case '/': {
        createStartPage();
        break;
      }
      case '/game': {
        createGamePage(buttonNumber, defaultFieldSize);
        break;
      }
      default: {
        create404Page();
        break;
      }
    }
  }, 400);
}

export function navigateTo(route, size, buttonNumber = '') {
  if (buttonNumber !== undefined) {
    localStorage.setItem('buttonNumber', buttonNumber);
  }
  if (size !== undefined) {
    localStorage.setItem('fieldSize', size);
  }
  window.location.hash = route;
  renderRoute(route, buttonNumber, size);
}

document.addEventListener('DOMContentLoaded', () => {
  clearPage();
  if (!window.location.hash) {
    window.location.hash = '/';
  }
  const route = window.location.hash.slice(1) || '/';
  const buttonNumber = localStorage.getItem('buttonNumber');
  const fieldSize = localStorage.getItem('fieldSize');
  console.log('hash', window.location.hash);
  renderRoute(route, buttonNumber, fieldSize);
})


window.addEventListener('hashchange', () => {
  const route = window.location.hash.slice(1) || '/';
  clearPage();
  const buttonNumber = localStorage.getItem('buttonNumber');
  const fieldSize = localStorage.getItem('fieldSize');
  renderRoute(route, buttonNumber, fieldSize);
});
