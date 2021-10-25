const solution = (str) => {
  let arr = str.split(" ").map((v) => +v);
  let 큰값 = arr[0];
  let 작은값 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > 큰값) {
      큰값 = arr[i];
    }
    if (arr[i] < 작은값) {
      작은값 = arr[i];
    }
  }
  return `${작은값} ${큰값}`;
};

console.log(solution("-1 -2 -3 -4")); // "-4 -1"

// function solution(s) {
//     const arr = s.split(' ');

//     return Math.min(...arr)+' '+Math.max(...arr);
// }
