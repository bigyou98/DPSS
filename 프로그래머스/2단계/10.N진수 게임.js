const solution = (진법, t, 참가인원, 튜브순서) => {
  let arr = [];

  for (let i = 0; i < t * 참가인원; i++) {
    arr.push(i.toString(진법).split("").join(""));
  }
  arr = arr.join("");

  let temp = [];
  // 참가인원만큼 나눠서 배열로 만들기
  for (let i = 0; i < t; i++) {
    temp.push(arr.slice(i * 참가인원, i * 참가인원 + 참가인원));
  }
  let str = "";
  temp.forEach((item) => {
    str += item[튜브순서 - 1];
  });
  return str.toUpperCase();
};
// console.log(solution(2, 4, 2, 1)); //	"0111"
// console.log(solution(16, 16, 2, 1)); //	"02468ACE11111111"
console.log(solution(16, 16, 2, 2)); //	"13579BDF01234567"

// 말하기

// 참가인원만큼 돌기
