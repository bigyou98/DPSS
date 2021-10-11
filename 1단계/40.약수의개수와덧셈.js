// left부터 right까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성

// left	right	result
// 13	17	43
// 24	27	52
// 약수의 개수 구하는거 정해야함

const solution = (left, right) => {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    // 약수의 개수가 짝수면 sum += i
    // 약수의 개수가 홀수면 sum -= i
    qqqq(i) % 2 === 0 ? (sum += i) : (sum -= i);
  }
  return sum;
};

// 약수 구하는 식
const qqqq = (number) => {
  // 1로 만든 이유 : number 자신을 더하기 위함
  let cnt = 1;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      cnt++;
    }
  }
  return cnt;
};
