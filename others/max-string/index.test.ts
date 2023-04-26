import { findMaxStringN } from './n';

const str1 = 'fdsaffffsssaasdaf';
const str2 = 'fdsa345tg';
const str3 = '';

describe('find max string', () => {
  test(`viewport`, () => {
    expect(findMaxStringN(str1)).toEqual('fdsa');
    expect(findMaxStringN(str2)).toEqual(str2);
    expect(findMaxStringN(str3)).toEqual(str3);
  });
});
