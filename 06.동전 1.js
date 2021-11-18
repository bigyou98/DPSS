const fs = require("fs");
let [input, ...arr] = fs.readFileSync("00.input.txt").toString().split("\n");

let [n, k] = input.split(" ");
n = Number(n); // 3
k = Number(k); // 10
arr = arr.map((v) => Number(v)); // [1,2,5]

let dp = Array(k + 1).fill(0);
dp[0] = 1;
for (coin of arr) {
  for (let j = coin; j < k + 1; j++) {
    if (j >= coin) {
      dp[j] += dp[j - coin];
    }
  }
}

console.log(dp[k]);

// dp의 각 index는 해당 합의 갯수
