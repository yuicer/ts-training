import { bigNumberAdd } from './index';

it('big number add', () => {
  expect(bigNumberAdd('1234', '56789')).toEqual('58023');
  expect(bigNumberAdd('0', '56789')).toEqual('56789');
  expect(bigNumberAdd('99999', '1111')).toEqual('101110');
});
