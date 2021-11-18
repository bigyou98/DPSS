const fs = require("fs");
let [input, ...arr] = fs.readFileSync("00.input.txt").toString().split("\n");
let [N, M, K] = input.split(" ");
N = Number(N); // 인원
M = Number(M); // 도로의 갯수
K = Number(K); // 도착할 마을
arr = arr.map((item) => item.split(" ").map(Number)); // 방법

let temp = [];

