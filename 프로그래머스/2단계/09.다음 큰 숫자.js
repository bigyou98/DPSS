// // n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// // n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// // n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// const solution = (n = 0) => {
//   // n을 2진화해서 배열로 만들기
//   let nArr = n.toString(2).split(""); // [ '1', '1', '1', '1' ]
//   let cnt = 0;
//   let tempArr = Array(nArr.length);
//   tempArr.splice(0, 1, "1");
//   tempArr.fill("0", 1, nArr.length);
//   // 만약 0이 없다면 0을 1번째 index에다가 삽입
//   if (nArr.includes("0") === false) {
//     nArr.splice(1, 0, "0");
//   } else {
//     // 1의 갯수 찾기
//     nArr.forEach((i) => {
//       if (i === "1") {
//         cnt++;
//       }
//     });
//     // 최대횟수
//     let ccnt = cnt;
//     while (ccnt !== 0) {
//       for (let i = 1; i < nArr.length; i++) {
//         // 만약 tempArr[i]가 0이라면 그자리에 '1'삽입
//         // cnt --;
//       }
//     }
//     // cnt의 갯수만 tempArr에 삽입하는 것이다
//   }
//   // return parseInt(tempArr.join(""), 2);
// };

// console.log(solution(78)); // 83
// // console.log(solution(15)); // 23

// 다른 사람의 풀이
// 우선 구하고자하는 숫자(answer)는 반드시 n보다 큰 자연수이므로 n+1로 초기화한다.

// n과 answer를 이진수로 바꿨을 때 1의 개수가 서로 같을 때까지 answer를 1씩 증가시키며 비교한다.

// 아이디어
// 1. n의 2진수와 1의 갯수가 같아야한다.
// 2. answer은 n+1부터 시작해서 2진수와 1의 갯수가 같을때 까지 1씩 증가한다.

const solution = (n) => {
  let n의2진수 = n.toString(2).split("");
  let oneNCnt = findOneCount(n의2진수);
  let answer = n + 1;
  let oneAnswerCnt = 0;

  let answer의2진수;
  // 둘의 1의갯수가 같으면 그만한다.
  while (true) {
    answer의2진수 = answer.toString(2).split("");
    oneAnswerCnt = findOneCount(answer의2진수);
    if (oneAnswerCnt === oneNCnt) {
      break;
    } else {
      answer++;
    }
  }
  return answer;
};

function findOneCount(arr = []) {
  let cnt = 0;
  arr.forEach((item) => {
    if (item === "1") {
      cnt++;
    }
  });
  return cnt;
}

console.log(solution(15));
console.log(solution(78));
