import { nonograms } from '../assets/nonograms';

export function addHintsToPlayground(buttonNumber, fieldSize) {
  const resolvedButtonNumber = buttonNumber ?? localStorage.getItem('buttonNumber');
  const resolvedFieldSize = fieldSize ?? localStorage.getItem('fieldSize');
  const allColumns = document.querySelectorAll('.header-col');
  const allRows = document.querySelectorAll('.header-row');
  const { columnHints } = nonograms[resolvedFieldSize][Number(resolvedButtonNumber)];
  const { rowHints } = nonograms[resolvedFieldSize][Number(resolvedButtonNumber)];
  for (let i = 0; i < columnHints.length; i += 1) {
    for (let j = 0; j < columnHints[i].length; j += 1) {
      allColumns[i].innerHTML += `<span>${columnHints[i][j]}</span>`;
    }
  }
  for (let k = 0; k < rowHints.length; k += 1) {
    for (let l = 0; l < rowHints[k].length; l += 1) {
      allRows[k].innerHTML += `<span>${rowHints[k][l]}</span>`;
    }
  }
}
