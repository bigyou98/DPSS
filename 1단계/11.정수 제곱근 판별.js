// n이 어떤 양의 정수 x에 제곱인지 판단하려고함

// n이 x의 제곱이라면 x+1의 제곱을 반환 아니면 -1을 반환
// **
// Number.isInteger() 정수인지 아닌지 불리언
const solution = (n) => {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
};

console.log(solution(121));
console.log(solution(144));
console.log(solution(3));
