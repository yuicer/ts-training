/**
 *  1. 从最大的串右边缩小得到 A 串
 *  2. A 串循环，从左边缩小得到 B 串
 *  3. B 串检查是否重复，因从大串开始的查找方式，不重复则得到结果(最长的子串)
 *
 */
export function findMaxStringNlogN(str: string) {
  let curLength = str.length;
  let result = str;

  while (curLength > 0) {
    for (let i = 0; i <= str.length - curLength; i++) {
      const partStr = str.slice(i, curLength + i);
      if (IsDuplicateString(partStr)) {
        result = partStr;
        curLength = 0;
        break;
      }
    }

    curLength--;
  }

  return result;
}

function IsDuplicateString(str: string): boolean {
  let result = false;
  for (let i of str) {
    if (str.indexOf(i) === str.lastIndexOf(i)) {
      result = true;
      break;
    }
  }
  return result;
}
