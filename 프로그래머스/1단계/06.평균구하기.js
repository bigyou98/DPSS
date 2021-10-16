// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

const solution = (arr) => {
  let sum = 0;
  arr.map((i) => (sum += i));
  return sum / arr.length;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
