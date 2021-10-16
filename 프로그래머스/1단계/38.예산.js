// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget

// 최대 몇개의 부서에 물품을 지원할 수 있는지 return

const solution = (arr = [], budget) => {
  // 오름차순 정렬
  arr.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (budget === 0) {
      break;
    } else {
      if (budget - arr[i] < 0) {
        continue;
      } else {
        budget = budget - arr[i];
        cnt++;
      }
    }
  }
  return cnt;
};

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); //	4
