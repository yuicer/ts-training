import { expect } from 'chai';
import { findMaxStringNlogN } from './nlogn';
import { findMaxStringN } from './n';

const str1 = 'fdsaffffsssaasdaf';
const str2 = 'fdsa345tg';
const str3 = '';

// expect(findMaxStringNlogN(str1)).equal('fdsa');
// expect(findMaxStringNlogN(str2)).equal(str2);
// expect(findMaxStringNlogN(str3)).equal(str3);

expect(findMaxStringN(str1)).equal('fdsa');
expect(findMaxStringN(str2)).equal(str2);
expect(findMaxStringN(str3)).equal(str3);
