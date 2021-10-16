// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 0은 false,

// 0이 아닌 것은 true이므로 이렇게도 가능하다.
// return n % 2  ?  "Odd" : "Even";
const solution = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};

console.log(solution(2));
console.log(solution(3));
console.log(solution(0));
