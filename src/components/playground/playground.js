import { createHtmlElement } from '../html-element/html-element';
import { paintBlackSquare } from '../../utils/paint-black-square';
import { clearCell } from '../../utils/clear-cell';
import { paintCross } from '../../utils/paint-cross';
import './playground.css';
import { playSoundForBlackSquare, playSoundForCross, makeEmptyCell } from '../../utils/play-sound';
import { makeInnerBorderWider, makeOuterBorderWider } from '../../utils/make-border-wider';

let isSoundEnabled;
export const timerState = {
  wasTimerStartedBefore: true,
  isTimerStarted: false,
};

if (localStorage.getItem('isSoundEnabled') === null) {
  isSoundEnabled = true;
  localStorage.setItem('isSoundEnabled', isSoundEnabled);
} else {
  isSoundEnabled = localStorage.getItem('isSoundEnabled');
}

const playground = createHtmlElement('div', ['playground']);

function createCell(cellClassNames) {
  const cell = createHtmlElement('div', cellClassNames);
  const canvas = createHtmlElement('canvas', ['canvas']);
  if (
    !cell.classList.contains('header-row') &&
    !cell.classList.contains('header-col') &&
    !cell.classList.contains('header-empty')
  ) {
    cell.append(canvas);
    cell.addEventListener('click', (event) => {
      const checkbox = document.querySelector('.sound');
      isSoundEnabled = checkbox.checked;
      const { target } = event;
      if (target.classList.contains('square')) {
        clearCell(target);
        makeEmptyCell(isSoundEnabled);
      } else {
        paintBlackSquare(target, timerState.isTimerStarted, timerState.wasTimerStartedBefore);
        playSoundForBlackSquare(isSoundEnabled);
        timerState.isTimerStarted = true;
        timerState.wasTimerStartedBefore = true;
      }
    });
  }
  cell.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (
      !cell.classList.contains('header-row') &&
      !cell.classList.contains('header-col') &&
      !cell.classList.contains('header-empty')
    ) {
      const { target } = event;
      if (target.classList.contains('cross')) {
        clearCell(target);
        makeEmptyCell(isSoundEnabled);
      } else {
        paintCross(target);
        playSoundForCross(isSoundEnabled);
      }
    }
  });
  setTimeout(() => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, 300);
  playground.append(cell);
  return playground;
}

export function createPlayground(fieldSize) {
  const resolvedFieldSize = fieldSize ?? localStorage.getItem('fieldSize');
  const playgroundWrapper = createHtmlElement('div', ['playground-wrapper']);
  playground.innerHTML = '';
  let playgroundElement;
  let cellsCount;
  let headerColCount;
  let headerRowCount;
  const cellSize = 'minmax(auto, 60%)';

  if (resolvedFieldSize === '5x5') {
    cellsCount = 35;
    headerColCount = 6;
    headerRowCount = 6;
  } else if (resolvedFieldSize === '10x10') {
    cellsCount = 120;
    headerColCount = 11;
    headerRowCount = 11;
  } else {
    cellsCount = 255;
    headerColCount = 16;
    headerRowCount = 16;
  }
  for (let i = 0; i <= cellsCount; i += 1) {
    if (i === 0) {
      playgroundElement = createCell(['cell', 'header-empty']);
    } else if (i > 0 && i < headerColCount) {
      playgroundElement = createCell(['cell', 'header-col']);
    } else if (i % headerRowCount === 0) {
      playgroundElement = createCell(['cell', 'header-row']);
    } else {
      playgroundElement = createCell(['cell', 'play']);
    }
  }
  makeInnerBorderWider(resolvedFieldSize);
  makeOuterBorderWider();
  playground.style.gridTemplateColumns = `repeat(${headerColCount}, ${cellSize})`;
  playground.style.gridTemplateRows = `repeat(${headerRowCount}, ${cellSize})`;
  playgroundWrapper.append(playgroundElement);
  document.body.append(playgroundWrapper);
}
