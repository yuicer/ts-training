function merge1(a: number[], b: number[]) {
  const aValidLength = a.length - b.length;
  let bIndex = 0;

  for (let i = 0; i < aValidLength; i++) {
    if (a[i] > b[bIndex]) {
      swap(a, i, b, bIndex);
    }
  }
  for (let i = 0; i < aValidLength; i++) {
    if (b[i] > b[i + 1]) {
      swap(b, i, b, i + 1);
    }
  }
  for (let i = aValidLength; i < a.length; i++) {
    a[i] = b[bIndex];
    bIndex++;
    if (a[i] < a[i - 1]) {
      swap(a, i, a, i - 1);
    }
  }
  return a;
}

function merge2(a: number[], b: number[]) {
  let aIndex = a.length - b.length - 1;
  let bIndex = b.length - 1;
  for (let i = 0; i < a.length; i++) {
    let number;
    if (bIndex === -1) {
      number = a[aIndex];
      aIndex--;
    } else if (aIndex === -1) {
      number = b[bIndex];
      bIndex--;
    } else if (a[aIndex] >= b[bIndex]) {
      number = a[aIndex];
      aIndex--;
    } else if (a[aIndex] < b[bIndex]) {
      number = b[bIndex];
      bIndex--;
    }
    a[a.length - 1 - i] = number;
  }
  return a;
}

function swap(arrA, aIndex, arrB, bIndex) {
  const temp = arrA[aIndex];
  arrA[aIndex] = arrB[bIndex];
  arrB[bIndex] = temp;
}

export { merge1, merge2 };
