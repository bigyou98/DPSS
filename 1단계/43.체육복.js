// 전체 학생의 수 n,
// 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
//  여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
// 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
const solution = (n, lost = [], reserve = []) => {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let temp = [...lost];
  lost = lost.filter((i) => !reserve.includes(i));
  reserve = reserve.filter((i) => !temp.includes(i));
  let answer = n - lost.length;

  lost.forEach((잃어버린애) => {
    if (reserve.includes(잃어버린애 - 1)) {
      reserve.splice(reserve.indexOf(잃어버린애 - 1), 1);
      answer++;
    } else if (reserve.includes(잃어버린애 + 1)) {
      reserve.splice(reserve.indexOf(잃어버린애 + 1), 1);
      answer++;
    }
  });
  return answer;
};

// console.log(solution(5, [2, 4], [1, 3, 5])); //5
// console.log(solution(5, [2, 4], [3])); //4
console.log(solution(5, [2, 3, 4], [3, 4, 5])); //4
// console.log(solution(3, [3], [1])); //2
console.log(solution(3, [1, 2], [2, 3])); //2
// console.log(solution(5, [1, 2], [2, 3])); //4
// console.log(solution(5, [5, 4, 2], [2, 4])); //4
// console.log(solution(5, [5, 4], [3, 4])); //4
// console.log(solution(5, [1, 2, 3], [2, 3, 4])); //4
// console.log(solution(5, [2, 3, 4], [1, 2, 3])); //4
// console.log(solution(10, [5, 4, 3, 2, 1], [3, 1, 2, 5, 4])); //10
