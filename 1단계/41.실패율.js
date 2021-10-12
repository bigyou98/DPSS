// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N,
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

// N+1 은 마지막 스테이지까지 클리어한 사용자임
// 실패율이 같으면 작은 번호부터
// 스테이지에 도달한 유저가 없는 경우에는 해당 스테이지를 0으로 정의
const solution = (N, stages = []) => {
  let fail = [];
  // 스테이지에 도달했는지 실패했는지 추가하기
  for (let i = 1; i <= N; i++) {
    // 각 스테이지 통과랑 실패 비교
    let 통과 = 0;
    let 실패 = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] > i) {
        통과++;
      } else if (stages[j] === i) {
        실패++;
      } else {
        continue;
      }
    }
    // 각 스테이지별 실패율 측정
    let 실패율 = 실패 / (통과 + 실패);
    fail.push([i, 실패율]);
  }

  return fail
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((i) => i[0]);
};
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]

// 해당 숫자(state)보다 크면 ++해주기 ->분모 통과했다는거임
// 작거나 같다면 통과못하고 남아있는 거임 -> 통과 못한거 저장

// 스테이지 번호를 정렬하기=> 플레이어의 실패율의 내림차순으로
