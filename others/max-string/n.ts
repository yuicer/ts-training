/**
 *  视窗逻辑
 */
export function findMaxStringN(str: string) {
  let result = '';
  let startIndex = 0;
  let endIndex = startIndex + 1;

  while (startIndex < str.length && endIndex <= str.length) {
    let curStr = str.slice(startIndex, endIndex);
    if (!hasContainStr(curStr, str[endIndex])) {
      if (str.slice(startIndex, endIndex + 1).length > result.length)
        result = str.slice(startIndex, endIndex + 1);
      endIndex++;
    } else {
      startIndex++;
      endIndex = startIndex + 1;
    }
  }
  return result;
}

function hasContainStr(str: string, char: string) {
  return str.indexOf(char) > -1;
}
