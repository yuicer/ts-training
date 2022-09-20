import { bigNumberAdd } from './index';

it('big number add', () => {
  expect(bigNumberAdd('1234', '56789')).toEqual('58023');
});
