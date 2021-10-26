// /dev/stdin
const fs = require("fs");
let [, arr] = fs.readFileSync("예제.txt").toString().trim().split("\n");
arr = arr.split(" ").map((v) => +v); // [ '7', '-1', '6', '2', '5' ]
const location = arr.indexOf(-1);

// slice도 시간복잡도 O(n)임
const gg = arr.slice(0, location);
const ww = arr.slice(location + 1, arr.length);

console.log(Math.min(...gg) + Math.min(...ww)); // 9
// let location = arr.indexOf("-1");

// // 작은수를 담을거니까 가장 큰값을 미리 담아놓음
// let frontMin = Number.MAX_SAFE_INTEGER;
// let backMin = Number.MAX_SAFE_INTEGER;

// for (let i = 0; i < location; i++) {
//   if (frontMin > Number(arr[i])) {
//     frontMin = Number(arr[i]);
//   }
// }

// for (let i = location + 1; i < arr.length; i++) {
//   if (backMin > Number(arr[i])) {
//     backMin = Number(arr[i]);
//   }
// }
// console.log(frontMin + backMin);

// keyPoint
// 처음부터 map으로 number로 변환시키지 않고 비교와 대입할때만 형변환을 해서 메모리와 시간 단축
// slice로 했을때는왜 안됬을까 slice가 문제였을까 spread연산자가 문제였을까 아니면 Math.min을 사용해서 그랬을까
// 복합적으로 다 조금씩 용량을 차지했던 것인가보다

// 그래서 StackSizeExceeded : 최대 호출 스택 크기를 초과했습니다.
// let fs = require("fs");
// let [, arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// arr = arr.split(" "); // [ '7', '-1', '6', '2', '5' ] let location = arr.indexOf("-1"); let gg = arr.slice(0, location); let ww = arr.slice(location + 1, arr.length); console.log(Math.min(...gg) + Math.min(...ww)); // 9
