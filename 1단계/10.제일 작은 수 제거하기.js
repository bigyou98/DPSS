//  arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요
// 단, 빈배열인 경우엔 -1을 채워 리턴하시오

const solution = (arr) => {
  return arr.length === 1 ? [-1] : arr.filter((i) => i !== Math.min(...arr));
};

console.log(solution([12]));
console.log(solution([5, 4, 3, 2, 1]));
