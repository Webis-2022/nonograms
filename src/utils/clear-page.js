export function clearPage() {
  const pageElements = document.body.children;
  [...pageElements].forEach((element) => element.remove());
}
