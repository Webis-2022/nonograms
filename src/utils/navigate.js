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

export function navigateTo(route, buttonNumber, size) {
  window.history.pushState({}, '', route);
  renderRoute(route, size, buttonNumber);
}

document.addEventListener('DOMContentLoaded', (_, buttonNumber, fieldSize) => {
  const route = window.location.pathname;
  renderRoute(route, buttonNumber, fieldSize);
})


window.addEventListener('popstate', (_, buttonNumber, fieldSize) => {
  clearPage();
  renderRoute(window.location.pathname, buttonNumber, fieldSize);
})