import { clearCell } from './clear-cell';
import { getContextCanvas } from './get-context-canvas';

export function paintCross(target) {
  if (target.classList.contains('square')) {
    clearCell(target);
  }
  target.classList.toggle('cross', true);
  const ctx = getContextCanvas(target);
  const canvasWidth = ctx.canvas.attributes[1].textContent;
  const x = 2;
  const y = x;
  ctx.moveTo(x, y);
  ctx.lineTo(canvasWidth - x * y, canvasWidth - x * y);
  ctx.stroke();

  ctx.moveTo(canvasWidth - x * y, x);
  ctx.lineTo(x, canvasWidth - x * y);
  ctx.stroke();
}
