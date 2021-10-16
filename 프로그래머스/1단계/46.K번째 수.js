// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함
const solution = (arr = [], commands = []) => {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    let temp = arr.slice(commands[i][0] - 1, commands[i][1]);
    temp.sort((a, b) => a - b);
    result.push(temp[commands[i][2] - 1]);
  }
  return result;
};

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
