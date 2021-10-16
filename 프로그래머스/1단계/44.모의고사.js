// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
// 1번애는 1~5까지 반복하고
// 2번애는 21 23 24 25 이런식으로 반복함
// 3번애는 33 11 22 44 55 이런식으로 반복함
const solution = (answers = []) => {
  let result = [];
  let a = "12345".repeat(answers.length / 5 + 1);
  let a_cnt = 0;
  let b = "21232425".repeat(answers.length / 8 + 1);
  let b_cnt = 0;
  let c = "3311224455".repeat(answers.length / 10 + 1);
  let c_cnt = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === Number(a[i])) {
      a_cnt++;
    }
    if (answers[i] === Number(b[i])) {
      b_cnt++;
    }
    if (answers[i] === Number(c[i])) {
      c_cnt++;
    }
  }

  // 출력 구분
  // 제일 많이 맞춘 녀석
  // 근데 제일 많이 맞춘 숫자가 같다면 전부다 넣어줌
  let 일등 = Math.max(...[a_cnt, b_cnt, c_cnt]);

  if (일등 === a_cnt) {
    result.push(1);
  }
  if (일등 === b_cnt) {
    result.push(2);
  }
  if (일등 === c_cnt) {
    result.push(3);
  }
  // 가장 문제를 많이 맞힌 사람을 리턴 만약 여러명이면 여러명 오름차순으로 정렬
  return result;
};
console.log(solution([1, 2, 3, 4, 5])); //[1]
console.log(solution([1, 3, 2, 4, 2])); //[1,2,3]
