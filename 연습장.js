let board = [
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

let col;
let colArr = [];
for (let i = 0; i < board[0].length; i++) {
  col = 1;
  for (let j = 0; j < board.length - 1; j++) {
    if (board[j][i] === 1 && board[j + 1][i] === 1) {
      col++;
    }
  }
  colArr.push(col);
}

console.log(colArr);
