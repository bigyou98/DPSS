const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

//input만큼의 크기인 것 중에서

// 00을 포함할수 있는 갯수를 구하는 함수 만들기

let memo = Array(Number(input)).fill(0);

// 직접 구해보고 규칙을 찾아냄
// DP가 메모리제이션이기때문에 필요할 때마다 계산하는 게아니라 계산하고 메모리에 저장하고
// 다음에 필요할때 그때 저장한 data를 불러오는 식이다.

memo[0] = 1;
memo[1] = 2;
memo[2] = 3;

for (let i = 3; i < input; i++) {
  memo[i] = (memo[i - 2] % 15746) + (memo[i - 1] % 15746);
}

console.log(memo[input - 1] % 15746);
