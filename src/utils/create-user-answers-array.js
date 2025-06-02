export function createUserAnswersArray(fieldSize) {
  const arrayOfArrays = [];
  for (let i = 0; i < Number(fieldSize); i += 1) {
    const arr = new Array(Number(fieldSize)).fill(false);
    arrayOfArrays.push(arr);
  }
  return arrayOfArrays;
}

export function addUserAnswersToArray() {
  const fieldSize = localStorage.getItem('fieldSize').split('x')[0];
  const allCanvasElements = document.querySelectorAll('.canvas');
  const userAnswersArray = createUserAnswersArray(fieldSize);
  allCanvasElements.forEach((item, index) => {
    if (item.classList.contains('square')) {
      const row = Math.floor(index / fieldSize);
      const col = index % fieldSize;
      userAnswersArray[row][col] = true;
    }
  });
  return userAnswersArray;
}