// 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외

// 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 알아볼 수 없는 번호를 0으로 표기

// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다
// 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return

// 0의 갯수 판단
// 최고점수 : original에서 갯수 만큼 더해주기
// 최저점수 : original

// 기존에 가지고 있던 배열에서 맞은 갯수가 중요함
const solution = (lottos = [], win_nums = []) => {
  let zeroCnt = 0;
  lottos.forEach((lotto) => {
    if (lotto === 0) {
      zeroCnt++;
    }
  });
  // 맞은 개수 구하기
  lottos = lottos.filter((lotto) => {
    return win_nums.includes(lotto);
  });
  return [등수(lottos.length + zeroCnt), 등수(lottos.length)];
};

const 등수 = (맞은수) => {
  switch (맞은수) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
};
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // 	[3, 5]
