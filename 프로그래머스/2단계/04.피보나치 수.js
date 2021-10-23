// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

function fibonacci(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 1;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] % 1234567) + (arr[i - 1] % 1234567);
  }
  return arr[n] % 1234567;
}

console.log(fibonacci(3)); // 2
console.log(fibonacci(5)); //5

// function solution(n) {
//   console.log(Number.MAX_SAFE_INTEGER);
//   let answer = fibonacci(n) % 1234567;
//   return answer;
// }

