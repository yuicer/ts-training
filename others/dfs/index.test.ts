import { isWordInBoard } from './index';

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

it('test', () => {
  expect(isWordInBoard(board, 'ABCCED')).toBe(true);
  expect(isWordInBoard(board, 'SEE')).toBe(true);
  expect(isWordInBoard(board, 'ABCB')).toBe(false);
});
