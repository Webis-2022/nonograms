export function createHtmlElement(tag, classNames = [], text = '') {
  const element = document.createElement(tag);
  classNames.forEach((cls) => {
    if (cls) element.classList.add(cls);
  });
  if (typeof text === 'string' && text.length > 0) {
    element.textContent = text;
  }
  return element;
}
