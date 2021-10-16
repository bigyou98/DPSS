// N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
// count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요

const solution = (price, myMoney, count) => {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  if (sum > myMoney) {
    return sum - myMoney;
  } else {
    return 0;
  }
};

console.log(solution(3, 20, 4)); //	10
