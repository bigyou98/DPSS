// 각 자릿수에서 숫자가 큰거부터 앞으로 배치
const solution = (n) => {
  let arr = [];
  let sting_n = String(n);
  for (let i = 0; i < sting_n.length; i++) {
    arr.push(sting_n.charAt(i));
  }
  return Number(arr.sort().reverse().join("").replace(",", ""));
};

console.log(solution(412));
