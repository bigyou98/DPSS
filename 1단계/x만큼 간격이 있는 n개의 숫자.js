function solution(x, n) {
  var answer = [];
  let cnt = 0;
  while (cnt !== n) {
    cnt++;
    answer.push(x * cnt);
  }
  return answer;
}
