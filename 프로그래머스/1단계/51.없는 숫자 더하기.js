// 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성

const solution = (numbers = []) => {
  const perfect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return perfect
    .filter((item) => !numbers.includes(item))
    .reduce((acc, cur) => acc + cur, 0);
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
