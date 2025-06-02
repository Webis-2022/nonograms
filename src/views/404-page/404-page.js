import { createHtmlElement } from '../../components/html-element/html-element';
import { createButton } from '../../components/button/button';
import './404-page.css';
import { navigateTo } from '../../utils/navigate';

export function create404Page() {
  const container = createHtmlElement('div', ['container']);
  const pageTitle = createHtmlElement('div', ['page-title']);
  const h1 = createHtmlElement('h1', ['h1'], 'Page not found');
  const goBackButton = createButton('go-back-btn', 'Go Back');
  goBackButton.addEventListener('click', () => {
    navigateTo('/');
  });

  pageTitle.append(h1);
  container.append(pageTitle, goBackButton);
  document.body.append(container);
}