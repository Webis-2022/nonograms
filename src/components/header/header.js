import { createHtmlElement } from '../html-element/html-element';
import { createSelectTemplateButton } from '../selectTemplateButton/select-template-button';
import { createTimer } from '../timer/timer';
import { createCheckbox } from '../checkbox/checkbox';
import './header.css';

export function createHeader() {
  const header = createHtmlElement('header', ['header']);

  const headerWrapper = createHtmlElement('div', ['header-wrapper']);

  const headerInner = createHtmlElement('div', ['header-inner']);
  const selectTemplateButton = createSelectTemplateButton();
  const timer = createTimer();
  const checkbox = createCheckbox();

  headerInner.append(selectTemplateButton, timer, checkbox);
  headerWrapper.append(headerInner);
  header.append(headerWrapper);
  document.body.append(header);
}
