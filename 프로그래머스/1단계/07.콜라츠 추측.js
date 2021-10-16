//  Collatz란 사람에 의해 제기된 이 추측은,
// 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

// 몇번 반복했는지를 반환해라
// 500번 반복했는데도 1이 되지않으면 -1을 반환

const solution = (num) => {
  let answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    }
    answer++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return answer;
};

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
