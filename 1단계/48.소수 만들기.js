// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다
// 숫자들이 들어있는 배열 nums
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return

const 소수찾기 = (n) => {
  let ans = [];
  for (let i = 2; i * i <= n; i++) {
    // 나눠떨어지면 소수가 아닌거잖아
    if (n % i === 0) {
      ans.push(1);
    } else {
      // n이 i로 나눠떨어지지 않으면
      ans.push(0);
    }
  }
  // 1이 포함되면 소수가 아님
  if (ans.includes(1)) {
    return false;
  } else {
    return true;
  }
};
const solution = (nums = []) => {
  let cnt = 0;

  //3개뽑으면됨
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = 0;
        sum += nums[i] + nums[j] + nums[k];
        if (소수찾기(sum)) {
          cnt++;
        }
      }
    }
  }
  return cnt;
};

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4

console.log(소수찾기(7));
