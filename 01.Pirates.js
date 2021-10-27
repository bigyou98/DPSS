// "/dev/stdin" 채점할때만 바꿔주기
let fs = require("fs");
let [n, ...arr] = fs.readFileSync("예제.txt").toString().trim().split("\n");

// 문자열로 만들기
arr = arr.toString();

// 배열로 만들고 정렬하기
arr = arr.split("").sort();

// 각 원소의 갯수를 가진 것들의 객체
let temp = {};

arr.forEach((item, i) => {
  // 전이랑 같으면 ++
  if (item === arr[i - 1]) {
    temp[item]++;
  } else {
    // 처음 나온 알파벳은 이렇게 1로 초기화됨
    temp[item] = 1;
  }
});

// 객체를 그대로 배열로 만들기
let tempArr = Object.entries(temp);
// [ [ 'a', 1 ], [ 'g', 1 ], [ 'h', 2 ], [ 'r', 6 ] ]

// 내림차순으로 젤 큰게 1번째로 오게하기
tempArr.sort((a, b) => {
  return b[1] - a[1];
});

console.log(tempArr[0][0], tempArr[0][1]);
