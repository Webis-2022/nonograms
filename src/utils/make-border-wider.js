export function makeInnerBorderWider(fieldSize) {
  const cellsInRow = fieldSize.split('x')[0];
  const wideBorder = 4;
  setTimeout(() => {
    const cells = document.querySelectorAll('.play');
    for (let j = wideBorder; j <= cells.length - 1; j += 5) {
      cells[j].style.borderRight = '3px solid #000';
    }
    for (
      let k = wideBorder * Number(cellsInRow);
      k <= cells.length - 1;
      k += cellsInRow * (wideBorder + 1)
    ) {
      for (let l = k; l < k + Number(cellsInRow); l += 1) {
        cells[l].style.borderBottom = '3px solid #000';
      }
    }
  }, 100);
}

export function makeOuterBorderWider() {
  setTimeout(() => {
    const headerColumns = document.querySelectorAll('.header-col');
    headerColumns[headerColumns.length - 1].style.borderRight = '3px solid';
    const headerRows = document.querySelectorAll('.header-row');
    headerRows[headerRows.length - 1].style.borderBottom = '3px solid';
  })
}