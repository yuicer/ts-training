import { Bubble } from './index';
import { testArr } from '../test-data';

describe('qucik sort', () => {
  testArr.forEach((x) => {
    it('local', () => {
      expect(Bubble(x)).toEqual(x.sort((a, b) => a - b));
    });
  });
});
