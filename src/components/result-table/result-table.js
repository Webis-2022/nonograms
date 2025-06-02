import { createHtmlElement } from '../html-element/html-element';
import './result-table.css';

export function createResultTable() {
  const table = createHtmlElement('table', ['result-table']);
  const thead = createHtmlElement('thead', ['table-head']);
  const tbody = createHtmlElement('tbody', ['table-body']);

  const nameCol = createHtmlElement('th', ['name'], 'Name');
  const difficultCol = createHtmlElement('th', ['difficult'], 'Difficult');
  const timeCol = createHtmlElement('th', ['time'], 'Time');
  const tHeadRow = createHtmlElement('tr', ['table-head-row']);

  const resultData = JSON.parse(localStorage.getItem('resultData') || '[]');

  for (let i = 0; i < resultData.length; i += 1) {
    const { nonogramName, fieldSize, time } = resultData[i];
    const tRow = createHtmlElement('tr', ['table-row']);
    const nameValue = createHtmlElement('td', [''], nonogramName);
    const fieldSizeValue = createHtmlElement('td', [''], fieldSize);
    const timeValue = createHtmlElement('td', [''], time);
    tRow.append(nameValue, fieldSizeValue, timeValue);
    tbody.append(tRow);
  }
  tHeadRow.append(nameCol, difficultCol, timeCol);
  thead.append(tHeadRow);
  table.append(thead, tbody);
  document.body.append(table);
}