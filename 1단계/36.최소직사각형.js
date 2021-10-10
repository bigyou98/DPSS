// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

const solution = (sizes = []) => {
  let temp = sizes[0];

  sizes.forEach((size) => {
    size.sort((a, b) => b - a); // 내림차순으로 정렬
    if (temp[0] < size[0]) {
      temp[0] = size[0];
    }
    if (temp[1] < size[1]) {
      temp[1] = size[1];
    }
  });

  return temp[0] * temp[1];
};
const srt = (a, b) => {
  return b - a;
};
// console.log(
//   solution([
//     [60, 50],
//     [30, 70],
//     [60, 30],
//     [80, 40],
//   ])
// ); // 4000;

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120;
