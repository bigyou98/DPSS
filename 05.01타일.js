const fs = require("fs");
const input = fs.readFileSync("00.input.txt").toString();

//input만큼의 크기인 것 중에서

// 00을 포함할수 있는 갯수를 구하는 함수 만들기
const zerozero = (n) => {
  if (n === 0) {
    return 1;
  }
  let cnt = 0;
  return ctn;
};

let sum = 0;
for (let i = 0; i <= input / 2; i) {
  sum += zerozero(i);
}

// 15746으로 나눈 나머지를 출력한다.
console.log(sum % 15746);
