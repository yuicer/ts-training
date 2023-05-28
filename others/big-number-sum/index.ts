function bigNumberAdd(str1: string, str2: string): string {
  const strArr1 = str1.split('').reverse();
  const strArr2 = str2.split('').reverse();

  const length1 = strArr1.length;
  const length2 = strArr2.length;

  let result = '';
  let cache = 0;
  let curIndex = 0;

  while (curIndex < Math.max(length1, length2)) {
    const a = strArr1[curIndex] === undefined ? 0 : +strArr1[curIndex];
    const b = strArr2[curIndex] === undefined ? 0 : +strArr2[curIndex];

    const num = a + b + cache;
    const c = num % 10;
    cache = num >= 10 ? 1 : 0;
    result = c + result;

    curIndex++;
  }

  if (cache) {
    result = cache + result;
  }

  return result;
}

export { bigNumberAdd };

export function add(strA: string, strB: string, c: number = 0): string {
  if (strA.length === 0 && strB.length == 0) {
    if (c) return c + '';
    return '';
  }

  const a = +strA.slice(-1);
  const b = +strB.slice(-1);

  const num = a + b + c;
  const nextC = Math.floor(num / 10);
  const str = (num % 10) + '';

  const nextA = strA.slice(0, -1);
  const nextB = strB.slice(0, -1);

  return add(nextA, nextB, nextC) + str;
}
