function findStringArrayIndex(
  arrayOfArrays: string[][],
  targetArray: string[]
): number {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    const currentArray = arrayOfArrays[i];
    if (arraysMatch(currentArray, targetArray)) {
      return i;
    }
  }
  return -1;
}

function arraysMatch(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
export { findStringArrayIndex };
