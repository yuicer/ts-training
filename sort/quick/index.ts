function Quick(_arr: number[]): number[] {
  const arr: number[] = _arr.slice()
  if (arr.length <= 1) return arr
  // standard number
  const flag = arr.shift()

  const left = [],
    right = []
  arr.forEach(item => {
    item < flag ? left.push(item) : right.push(item)
  })
  return [].concat(Quick(left), flag, Quick(right))
}

export default Quick
