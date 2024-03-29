import { bigNumberAdd } from './index';
import { add } from './index';

it('big number add', () => {
  expect(bigNumberAdd('1234', '56789')).toEqual('58023');
  expect(bigNumberAdd('0', '0')).toEqual('0');
  expect(bigNumberAdd('10', '90')).toEqual('100');
  expect(bigNumberAdd('0', '56789')).toEqual('56789');
  expect(bigNumberAdd('99999', '1111')).toEqual('101110');
});

it('new big number add', () => {
  expect(add('1234', '56789')).toEqual('58023');
  expect(add('0', '56789')).toEqual('56789');
  expect(add('0', '0')).toEqual('0');
  expect(add('10', '90')).toEqual('100');
  expect(add('99999', '1111')).toEqual('101110');
});
