import leftButtonClick from '../assets/audio/fill-cell.mp3';
import rightButtonClick from '../assets/audio/cross.mp3';
import emptyCellSound from '../assets/audio/empty-cell.mp3';
import winnerSound from '../assets/audio/you-win.mp3';

export function playSoundForBlackSquare(isSoundEnabled) {
  if (isSoundEnabled === true) {
    const blackSquareSound = new Audio(leftButtonClick);
    blackSquareSound.play();
  }
}

export function playSoundForCross(isSoundEnabled) {
  if (isSoundEnabled === true) {
    const crossSound = new Audio(rightButtonClick);
    crossSound.play();
  }
}

export function makeEmptyCell(isSoundEnabled) {
  if (isSoundEnabled === true) {
    const emptyCell = new Audio(emptyCellSound);
    emptyCell.play();
  }
}

export function makeWinnerSound(isSoundEnabled) {
  if (isSoundEnabled === 'true') {
    const winner = new Audio(winnerSound);
    winner.play();
  }
}
