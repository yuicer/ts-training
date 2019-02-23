function Bubble(_arr: number[]): number[] {
  const arr: number[] = _arr.slice()

  for (let index = 0; index < arr.length; index++) {
    for (let pIndex = 0; pIndex < arr.length - index; pIndex++)
      if (arr[pIndex] > arr[pIndex + 1]) {
        let cache = arr[pIndex + 1]
        arr[pIndex + 1] = arr[pIndex]
        arr[pIndex] = cache
      }
  }

  return arr
}

export default Bubble
