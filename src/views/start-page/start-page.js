import { createHtmlElement } from '../../components/html-element/html-element';
import { createButton } from '../../components/button/button';
import { createTemplateSizeSelectionPage } from '../template-size-selection-page/template-size-selection-page';
import './start-page.css';
import { navigateTo } from '../../utils/navigate';
import { makeBackgroundBlack } from '../../utils/make-background-color-black';

export function createStartPage() {
  makeBackgroundBlack();
  const contentWrapper = createHtmlElement('div', ['content-wrapper']);
  const gameTitleEng = createHtmlElement('h1', ['game-title-eng'], 'Nonograms');
  const gameTitleJp = createHtmlElement('h2', ['game-title-jp'], 'ノノグラム');

  const playButton = createButton(['play-button'], 'Play');
  playButton.addEventListener('click', () => {
    createTemplateSizeSelectionPage();
    navigateTo('/template-size-selection');
  });

  contentWrapper.append(gameTitleEng, gameTitleJp, playButton);
  document.body.append(contentWrapper);
}