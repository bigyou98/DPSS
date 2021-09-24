// x를 각 자릿수를 따로 분리한다
// 분리한 것들의 합을 구한다 = hashad
// x가 hashad로 나눠지면 true,아니면 false

const solution = (x) => {
  const stringX = String(x);
  let sum = 0;
  for (let i = 0; i < stringX.length; i++) {
    sum += parseInt(stringX[i]);
  }
  return x % sum === 0;
};

console.log(solution(10));
console.log(solution(11));
