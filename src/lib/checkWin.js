/**
 * Checks if there's a winning pattern in the given tic-tac-toe board.
 *
 * @param {(string|undefined)[][]} board - The game board represented as a 2D array.
 * @returns {[string, (number[])[]|null]} Returns an array with the winner ('X' or 'O') and the positions of the winning pattern (an array of [row, col] pairs), or ['', null] if there's no winner.
 */
export default function checkWinner(board) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (board[row].every((cell) => cell === "X")) {
      return ["X", board[row].map((_, col) => [row, col])];
    }
    if (board[row].every((cell) => cell === "O")) {
      return ["O", board[row].map((_, col) => [row, col])];
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    const winningPattern = [];
    if (
      board[0][col] === board[1][col] &&
      board[1][col] === board[2][col] &&
      board[0][col] !== undefined
    ) {
      for (let row = 0; row < 3; row++) {
        winningPattern.push([row, col]);
      }
      return [board[0][col], winningPattern];
    }
  }

  // Check diagonals
  const diag1Pattern = [];
  const diag2Pattern = [];
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== undefined
  ) {
    diag1Pattern.push([0, 0], [1, 1], [2, 2]);
    return [board[0][0], diag1Pattern];
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== undefined
  ) {
    diag2Pattern.push([0, 2], [1, 1], [2, 0]);
    return [board[0][2], diag2Pattern];
  }

  // If no winner, return ['', null]
  return ["", null];
}
