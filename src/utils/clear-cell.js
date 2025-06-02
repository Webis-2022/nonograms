import { getContextCanvas } from './get-context-canvas';
import { addUserAnswersToArray } from './create-user-answers-array';

export function clearCell(target) {
  const ctx = getContextCanvas(target);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  if (target.classList.contains('square')) {
    target.classList.toggle('square', false);
    addUserAnswersToArray();
  } else {
    target.classList.toggle('cross', false);
  }
}