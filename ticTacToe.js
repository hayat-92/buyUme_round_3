function ticTacToe(board) {
  const n = board.length;
  //   Check for rows
  for (let i = 0; i < n; i++) {
    if (board[i].every((cell) => cell === "x")) {
      return "x";
    } else if (board[i].every((cell) => cell === "o")) {
      return "o";
    }
  }

  //   Check for columns
  for (let j = 0; j < n; j++) {
    let xCount = 0;
    let oCount = 0;
    for (let z = 0; z < n; z++) {
      if (board[z][j] === "x") {
        xCount++;
      } else if (board[z][j] === "o") {
        oCount++;
      }
    }

    if (xCount === n) {
      return "x";
    } else if (oCount === n) {
      return "o";
    }
  }

  //   Check for diagonal [top-left to bottom-right]
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < n; i++) {
    if (board[i][i] === "x") {
      xCount++;
    } else if (board[i][i] === "o") {
      oCount++;
    }
  }

  if (xCount === n) {
    return "x";
  } else if (oCount === n) {
    return "o";
  }

  //   Check for diagonals [top-right to bottom-left]
  xCount = 0;
  oCount = 0;
  for (let i = 0; i < n; i++) {
    if (board[i][n - 1 - i] === "x") {
      xCount++;
    } else if (board[i][n - i - 1] === "o") {
      oCount++;
    }
  }

  if (xCount === n) {
    return "x";
  } else if (oCount === n) {
    return "o";
  }

  //   return for tie
  return "tie";
}

// Test
const board = [
  ["x", "o", "o"],
  ["x", "x", "o"],
  ["o", "o", "x"],
];

console.log(ticTacToe(board));
