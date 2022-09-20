function bigNumberAdd(str1: string, str2: string): string {
  const strArr1 = str1.split('').reverse();
  const strArr2 = str2.split('').reverse();

  const length1 = strArr1.length;
  const length2 = strArr2.length;

  let result = '';
  let cache = 0;
  let curIndex = 0;

  while (curIndex < Math.min(length1, length2)) {
    const a = +strArr1[curIndex];
    const b = +strArr2[curIndex];
    const num = a + b + cache;
    cache = Math.floor(num / 10);
    const c = num % 10;
    result = c + result;

    curIndex++;
  }

  if (length1 === length2) {
    if (cache) result = cache + result;
  }

  if (length1 > length2) {
    if (cache)
      result =
        bigNumberAdd(`${cache}`, str1.slice(0, length1 - curIndex)) + result;
    else result = str1.slice(0, length1 - curIndex) + result;
  } else if (length1 < length2) {
    if (cache)
      result =
        bigNumberAdd(`${cache}`, str2.slice(0, length2 - curIndex)) + result;
    else result = str2.slice(0, length2 - curIndex) + result;
  }

  return result;
}

export { bigNumberAdd };
