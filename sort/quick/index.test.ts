import { Quick1, Quick2 } from './index';
import { testArr } from '../test-data';

describe('qucik sort', () => {
  testArr.forEach((x) => {
    it('space', () => {
      expect(Quick1(x)).toEqual(x.sort((a, b) => a - b));
    });

    const sortedArr = Quick2([...x]);
    test(`local`, () => {
      expect(sortedArr.toString()).toEqual(x.sort((a, b) => a - b).toString());
    });
  });
});
