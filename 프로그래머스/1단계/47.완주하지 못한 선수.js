// 단 1명을 제외하고 모든 선수가 완주를 함

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
// 완주한 선수들의 이름이 담긴 배열 completion

// 완주하지 못한 선수의 이름을 리턴해라
const solution = (participant = [], completion = []) => {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
    }
  }
};
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
