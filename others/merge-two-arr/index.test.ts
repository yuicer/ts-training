import { merge1, merge2, merge3 } from './index';

describe('merge two array', () => {
  test(`O(1) space O(n) time`, () => {
    expect(JSON.stringify(merge1([1, 3, 5, 6, 0, 0, 0], [2, 4, 7]))).toEqual(
      '[1,2,3,4,5,6,7]'
    );

    expect(JSON.stringify(merge2([1, 3, 5, 6, 0, 0, 0], [2, 4, 7]))).toEqual(
      '[1,2,3,4,5,6,7]'
    );
  });

  test(`simple merge`, () => {
    expect(JSON.stringify(merge3([1, 3, 5, 6], [2, 4, 7]))).toEqual(
      '[1,2,3,4,5,6,7]'
    );
  });
});
