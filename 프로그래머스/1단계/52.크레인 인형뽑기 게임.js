// 2차원 배열 board
// 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때,
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return

// moves에 적힌 숫자만큼 실행한다
// moves의 원소가 가르키는 것은 board-1의 뒤쪽(y축) index이다.
// //board.length만큼 돌아야함 그때 가장 먼저 만난 것을  tempArr에다가 넣고 그자리를 0으로 바꾼다.
// 반복
// tempArr에서 같은 숫자끼리 지운다. 2개씩 지워야함
// 지워질때마다 cnt를 2씩 증가시킨다.

const solution = (board = [], moves = []) => {
  let cnt = 0;
  let tempArr = [];
  // 꺼내오기
  moves.forEach((move) => {
    for (let bod of board) {
      if (bod[move - 1] !== 0) {
        if (tempArr[tempArr.length - 1] === bod[move - 1]) {
          tempArr.pop();
          cnt += 2;
          bod[move - 1] = 0;
          break;
        }
        tempArr.push(bod[move - 1]);
        bod[move - 1] = 0;
        break;
      }
    }
  });
  return cnt;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4 3 1 1 3 2 4

// 땡겨지면서 같아지는 경우가 있음
