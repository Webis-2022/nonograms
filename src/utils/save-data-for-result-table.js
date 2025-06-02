import { nonograms } from '../assets/nonograms';

export function saveDataForResultTable(time) {
  const fieldSize = localStorage.getItem('fieldSize');
  const templateNumber = localStorage.getItem('buttonNumber');
  const nonogramName = nonograms[fieldSize][templateNumber].description;

  const newEntry = {
    nonogramName,
    fieldSize,
    time,
  };

  const resultData = JSON.parse(localStorage.getItem('resultData') || '[]');
  resultData.push(newEntry);
  localStorage.setItem('resultData', JSON.stringify(resultData));
}