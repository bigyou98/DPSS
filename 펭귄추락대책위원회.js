// /dev/stdin
let fs = require("fs");
let [, arr] = fs.readFileSync("예제.txt").toString().trim().split("\n");
arr = arr.split(" "); // [ '7', '-1', '6', '2', '5' ]

// let location = arr.indexOf("-1");

// // slice도 시간복잡도 O(n)임
// // 그래서 StackSizeExceeded : 최대 호출 스택 크기를 초과했습니다.
// let 앞배열 = arr.slice(0, location);
// let 뒷배열 = arr.slice(location + 1, arr.length);
// console.log(Math.min(...앞배열) + Math.min(...뒷배열));

// for문으로 -1찾나 메소드로 찾나 똑같을 거같음 O(n)
let location = arr.indexOf("-1");

// 작은수를 담을거니까 가장 큰값을 미리 담아놓음
let frontMin = Number.MAX_SAFE_INTEGER;
let backMin = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < location; i++) {
  if (frontMin > Number(arr[i])) {
    frontMin = Number(arr[i]);
  }
}

for (let i = location + 1; i < arr.length; i++) {
  if (backMin > Number(arr[i])) {
    backMin = Number(arr[i]);
  }
}
console.log(frontMin + backMin);

// keyPoint
// 처음부터 map으로 number로 변환시키지 않고 비교와 대입할때만 형변환을 해서 메모리와 시간 단축
