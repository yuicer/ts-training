import { expect, assert } from 'chai'

class Tester {
  private sort: (arr) => {}
  constructor(sort: (arr) => {}) {
    this.sort = sort
  }
  // by Array.sort()
  private getSortedArr(arr: []): [] {
    return [].concat(arr).sort((a, b) => a - b) as []
  }
  start(title: string = '') {
    describe(title, () => {
      testArr.forEach(_arr => {
        it('', () => {
          console.log(`
          test: ${_arr}
          result: ${this.getSortedArr(_arr)}`)

          expect(this.sort(_arr)).to.deep.equal(this.getSortedArr(_arr))
        })
      })
    })
  }
}

const testArr: any[] = [
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [2, 1, 3, 5, 0, -2, -3, 20, 12]
]

export default Tester
