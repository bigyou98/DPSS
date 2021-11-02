const fs = require("fs");
const input = fs.readFileSync("00.input.txt").toString().trim().split("\n");
// 세로 4, 가로 5
let [height, width] = input[0].split(" ").map(Number);

// 배열로 만들기
let road = [];
for (let i = 0; i < height; i++) {
  road.push(input[i + 1].split(" ").map(Number));
}

// false로 채운 배열 생성
let just = Array(height);

for (let i = 0; i < just.length; i++) {
  just[i] = Array(width).fill(false);
}

let cnt = 0;
let nowI = 0;
let nowJ = 0;

while (nowI < width || nowJ < height) {
  // 현재위치: road[i][j];
  // 오른쪽이 더 작은 경우 => 이동
  if (road[nowI][nowJ] > road[nowI][nowJ + 1]) {
    if (nowJ === width - 1) {
      continue;
    }
    nowJ++;
  }
  // 아래쪽이 더 작은 경우 => 이동
  else if (road[nowI][nowJ] > road[nowI + 1][nowJ]) {
    if (nowI === height - 1) {
      continue;
    }
    nowI++;
  }
  // 왼쪽이 더작은 경우 => 이동
  else if (road[nowI][nowJ] > road[nowI - 1][nowJ]) {
    if (nowJ === 0) {
      continue;
    }
    nowJ--;
  }
}
if (nowI === width - 1 && nowJ === height - 1) {
  cnt++;
}
console.log(cnt);
