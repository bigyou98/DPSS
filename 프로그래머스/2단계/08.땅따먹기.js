// // 땅(land)은 총 N행 4열로 이루어져 있고
// // 모든 칸에는 점수가 쓰여 있습니다.
// // 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다
// // . 단, 땅따먹기 게임에는 한 행씩 내려올 때,
// // 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
// const solution = (lands = []) => {
//   // 1번째에는 값, 2번째에는 해당 열을 저장할 것이다.
//   let 가장큰수집합 = [];
//   let 변하는J값 = -1;
//   let J값 = -2;
//   for (let i = 0; i < lands.length; i++) {
//     let 큰수 = 0;
//     for (let j = 0; j < 4; j++) {
//       if (lands[i][j] > 큰수 && j === J값) {
//         // 그런데 만약 그전의 값과 열이 같다면
//         continue;
//       }
//       // temp에 가장 큰수가 담기게함
//       else if (lands[i][j] >= 큰수) {
//         큰수 = lands[i][j];
//         변하는J값 = j;
//       }
//     }
//     J값 = 변하는J값;
//     // 값과 열을 저장함
//     가장큰수집합.push(큰수);
//   }

//   return 가장큰수집합.reduce((acc, cur) => acc + cur, 0);
// };

// // 가장 큰수를 찾아야함 일단 0으로 초기화

function solution(land) {
  let answer = [];
  let len = land.length;
  for (let i = 1; i < len; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  answer = land[land.length - 1];

  return Math.max(...answer);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16

// 각 열마다 해당열에서 자신의 열을 제외하고 다음열에서 가장 큰것을 자신에게 더한다.
// 다음의 land의 i를 바꾸는 형식
// 각 행마다 반복한다.
// 그래서 제일 높게 나온 것을 반환한다.
