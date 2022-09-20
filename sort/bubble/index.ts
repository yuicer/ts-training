function Bubble(arr: number[]): number[] {
  for (let index = 0; index < arr.length; index++) {
    for (let pIndex = 0; pIndex < arr.length - index; pIndex++)
      if (arr[pIndex] > arr[pIndex + 1]) {
        swap(arr, pIndex, pIndex + 1);
      }
  }

  return arr;
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export { Bubble };
