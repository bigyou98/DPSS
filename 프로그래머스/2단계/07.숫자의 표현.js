// n을 연속한 자연수들로 표현 하는 방법의 수
const solution = (n) => {
  // 15그자체는 일단 cnt침
  let cnt = 1;
  // 8부터 시작해서 1까지
  for (let i = 1; i <= n / 2 + 1; i++) {
    let sum = 0;
    const qqq = (n, 바뀌는값) => {
      // 더해주기
      sum += 바뀌는값;
      // 15를 다 채우지 못한다면
      if (sum < n) {
        return qqq(n, 바뀌는값 + 1);
      } else if (sum > n) {
        return false;
      } else if (sum === n) {
        return true;
      }
    };
    if (qqq(n, i)) {
      cnt++;
    }
  }
  return cnt;
};

console.log(solution(15)); //4
console.log(solution(14)); //4
// 15 = 15
// 7 + 8 = 15
// 4 + 5 + 6 = 15
// 1 + 2 + 3 + 4 + 5 = 15
