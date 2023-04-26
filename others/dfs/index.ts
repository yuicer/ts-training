function isWordInBoard(board: string[][], word: string): boolean {
  let result = false;
  const firstChar = word[0];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === firstChar) {
        if (check(board, i, j, word.slice(1)) === true) {
          result = true;
          break;
        }
      }
    }
    if (result) break;
  }

  return result;
}

function check(board: string[][], i: number, j: number, word: string): boolean {
  let result = false;
  // top right bottom left

  ['top', 'right', 'bottom', 'left'].forEach((x) => {
    const { ii, jj } = getPosition(x as any, i, j);

    if (board[ii]?.[jj] && board[ii][jj] !== '*' && board[ii][jj] === word[0]) {
      const temp = board[ii][jj];
      board[ii][jj] = '*';
      if (word[1]) result = check(board, ii, jj, word.slice(1));
      else result = true;
      board[ii][jj] = temp;
    }
  });
  return result;
}

function getPosition(
  position: 'top' | 'right' | 'bottom' | 'left',
  i: number,
  j: number
): { ii: number; jj: number } {
  if (position === 'top')
    return {
      ii: i - 1,
      jj: j,
    };
  if (position === 'right')
    return {
      ii: i,
      jj: j + 1,
    };
  if (position === 'bottom')
    return {
      ii: i + 1,
      jj: j,
    };
  if (position === 'left')
    return {
      ii: i,
      jj: j - 1,
    };
}

export { isWordInBoard };
