// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수 =  1과 자기자신으로만 나눠지는 수
// 1은 소수가 아님
// 10 => 4  :: 2,3,5,7
// 5 => 3 :: 2,3,5

// // 1번째 풀이 : 시간, 효율성에서 통과하지 못함
// const solution = (n) => {
//   arr = [];
//   for (let i = 2; i <= n; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0 && i !== j) break;
//       else if (i === j && i % j === 0) arr.push(i);
//     }
//   }
//   return arr.length;
// };

// 2번째 풀이 : 에라토스테네서의 체 사용
// 에라토스테네스의 체를 이용하여 2~n까지 소수 갯수 구하기
let solution = (n) => {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  // 제곱근으로 비교해서 효율을 높임
  for (let i = 2; i * i <= n; i++) {
    // true만 반복문 돌림
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  // true인것으로 필터링
  return arr.filter((e) => e).length;
};
console.log(solution(10)); //4
console.log(solution(5)); //3
