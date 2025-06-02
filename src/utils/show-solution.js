import { nonograms } from '../assets/nonograms';
import { createArrayOfArrays, drawImage } from './retrieve-saved-draw';

export function showSolution() {
  const fieldSize = localStorage.getItem('fieldSize');
  const templateNumber = localStorage.getItem('buttonNumber');
  const nonogramAnswersArray = nonograms[fieldSize][templateNumber].answers;
  const arrayOfArrays = createArrayOfArrays();
  drawImage(arrayOfArrays, nonogramAnswersArray, true, false);
}