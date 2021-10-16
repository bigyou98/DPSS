// "/dev/stdin" 채점할때만 바꿔주기
let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map(Number);

console.log(input[0] + input[1]);
