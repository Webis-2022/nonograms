
export function getContextCanvas(target) {
  const canvas = target.closest('canvas');
  if (canvas === null) {
    return null;
  }
  const ctx = canvas.getContext('2d');
  return ctx;
}