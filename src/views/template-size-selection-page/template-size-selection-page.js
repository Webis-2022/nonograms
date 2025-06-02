import { clearPage } from '../../utils/clear-page';
import { createHtmlElement } from '../../components/html-element/html-element';
import { createButton } from '../../components/button/button';
import templateImage from '../../assets/img/template.png';
import './template-size-selection-page.css';
import { navigateTo } from '../../utils/navigate';
import { makeBackgroundBlack } from '../../utils/make-background-color-black';
import { selectRandomTemplateButtonHandler } from '../../button-handlers/button-handlers';

// eslint-disable-next-line import/no-mutable-exports
export let fieldSize;

export function createTemplateSizeSelectionPage() {
  const smallestSize = 5;
  clearPage();
  makeBackgroundBlack();

  const fieldSizeWrapper = createHtmlElement('div', ['field-size__wrapper']);
  const title = createHtmlElement('h1', ['title'], 'Please select size of template');
  const selectRandomTemplate = createButton(
    ['select-random-template__button'],
    'Select Random Template'
  );
  selectRandomTemplate.addEventListener('click', selectRandomTemplateButtonHandler);
  fieldSizeWrapper.append(title);

  for (let i = 0; i < 3; i += 1) {
    const fieldSizeSelector = createHtmlElement('div', ['field-size__selector']);


    const selectorImage = createHtmlElement('img');
    selectorImage.src = templateImage;
    const fieldSizeValue = createHtmlElement(
      'span',
      [],
      `${smallestSize * (i + 1)}x${smallestSize * (i + 1)}`
    );

    fieldSizeSelector.append(selectorImage, fieldSizeValue);
    fieldSizeWrapper.append(fieldSizeSelector);
  }
  setTimeout(() => {
    const fieldSizeSelectors = document.querySelectorAll('.field-size__selector');

    fieldSizeSelectors.forEach((selector, index) =>
      selector.addEventListener('click', () => {
        fieldSize = String(`${smallestSize * (index + 1)}x${smallestSize * (index + 1)}`);
        navigateTo('/template-selection', fieldSize);
      })
    );
  }, 400);
  fieldSizeWrapper.append(selectRandomTemplate);
  document.body.append(fieldSizeWrapper);
}
