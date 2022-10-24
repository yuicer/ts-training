// extra array space
function Quick1(_arr: number[]): number[] {
  const arr: number[] = _arr.slice();
  if (arr.length <= 1) return arr;
  // standard number
  const pivot = arr.pop();

  const left = [],
    right = [];
  arr.forEach((item) => {
    item < pivot ? left.push(item) : right.push(item);
  });
  return [].concat(Quick1(left), pivot, Quick1(right));
}

// standard
function Quick2(
  arr: number[],
  lowIndex: number = 0,
  highIndex: number = arr.length - 1
) {
  // pivot is the last element
  if (lowIndex < highIndex) {
    const pivot = arr[highIndex];
    let sortedIndex = lowIndex;

    for (let i = lowIndex; i < highIndex; i++) {
      if (arr[i] < pivot) {
        swap(arr, sortedIndex, i);
        sortedIndex++;
      }
    }
    swap(arr, sortedIndex, highIndex);

    Quick2(arr, lowIndex, sortedIndex - 1);
    Quick2(arr, sortedIndex + 1, highIndex);
  }
  return arr;
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export { Quick1, Quick2 };
