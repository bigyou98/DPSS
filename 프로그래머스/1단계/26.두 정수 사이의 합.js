// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

const solution = (a, b) => {
  let sum = 0;
  Math.max(a, b) - Math.min(a, b);
  for (let i = 0; i < Math.max(a, b) - Math.min(a, b) + 1; i++) {
    sum += Math.min(a, b) + i;
  }
  return sum;
};
console.log(solution(3, 5)); //12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
console.log(solution(3, 4)); // 7
