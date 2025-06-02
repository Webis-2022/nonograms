import { clearCell } from './clear-cell';

export function clearPlayground() {
  const playgroundCells = document.querySelectorAll('.canvas');
  playgroundCells.forEach((cell) => {
    clearCell(cell);
  });
}
