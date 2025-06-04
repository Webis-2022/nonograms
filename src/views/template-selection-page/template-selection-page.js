import { clearPage } from '../../utils/clear-page';
import { createHtmlElement } from '../../components/html-element/html-element';
import leftArrow from '../../assets/img/left-arrow.png';
import './template-selection-page.css';
import { navigateTo } from '../../utils/navigate';
import { makeBackgroundBlack } from '../../utils/make-background-color-black';
import { returnButtonHandler } from '../../button-handlers/button-handlers';

export const smallFields = ['snake', 'car', 'airplane', 'dog', 'snowflake'];
export const middleFields = ['home', 'tv', 'football', 'tree', 'mouse'];
export const bigFields = ['spades', 'sun', 'church', 'lamp', 'swan'];

export function createTemplateSelectionPage(playGroundSize) {
  console.log('playGroundSize:', playGroundSize);
  let templatesArr = [];
  if (playGroundSize === '5x5') {
    templatesArr = smallFields;
  } else if (playGroundSize === '10x10') {
    templatesArr = middleFields;
  } else if (playGroundSize === '15x15') {
    templatesArr = bigFields;
  }
  clearPage();
  makeBackgroundBlack();
  const templatesWrapper = createHtmlElement('div', ['templates-wrapper']);

  const returnButton = createHtmlElement('div', ['return-button']);

  const returnButtonIcon = createHtmlElement('img');
  returnButtonIcon.src = leftArrow;

  const title = createHtmlElement('h1', ['title'], 'Please select a template');

  returnButton.append(returnButtonIcon);
  returnButton.addEventListener('click', returnButtonHandler);
  templatesWrapper.append(returnButton, title);

  for (let j = 0; j < templatesArr.length; j += 1) {
    const templateSelector = createHtmlElement('div', ['template-selector']);
    templateSelector.setAttribute('data-number', j);

    templateSelector.addEventListener('click', (event) => {
      const buttonNumber = event.currentTarget.dataset.number;
      localStorage.setItem('buttonNumber', buttonNumber);
      localStorage.setItem('fieldSize', playGroundSize);
      navigateTo('/game', playGroundSize, buttonNumber);
    })

    const templateName = document.createElement('span');
    templateName.textContent = templatesArr[j].charAt(0).toUpperCase() + templatesArr[j].slice(1);
    console.log('___', templatesArr[j]);

    templateSelector.appendChild(templateName);
    templatesWrapper.appendChild(templateSelector);
  }
  document.body.appendChild(templatesWrapper);
}
