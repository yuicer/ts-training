import { merge1, merge2 } from './index';
import { expect } from 'chai';

expect(JSON.stringify(merge1([1, 3, 5, 6, 0, 0, 0], [2, 4, 7]))).equal(
  '[1,2,3,4,5,6,7]'
);

expect(JSON.stringify(merge2([1, 3, 5, 6, 0, 0, 0], [2, 4, 7]))).equal(
  '[1,2,3,4,5,6,7]'
);
