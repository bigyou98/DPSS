// 학생들이 자기 자신을 평가한 점수가 유일한 최고점 또는 유일한 최저점이라면 그 점수는 제외하고 평균을 구합니다.
const solution = (scores = []) => {
  let answer = "";

  // 각 열 돌기
  for (let i = 0; i < scores.length; i++) {
    // 평균 구하기 위한 배열
    let tempArr = [];
    // 각 행의 열 돌기
    for (let j = 0; j < scores[i].length; j++) {
      tempArr.push(scores[j][i]);
    }

    // 자신이 준게 유일한 최고점이라면?
    if (scores[i][i] === Math.max(...tempArr)) {
      let maxNum = Math.max(...tempArr);
      tempArr.splice(tempArr.indexOf(maxNum), 1);
      if (tempArr.includes(maxNum)) {
        tempArr.push(maxNum);
      }
    }
    // 자신이 준게 유일한 최저점이라면
    else if (scores[i][i] === Math.min(...tempArr)) {
      let minNum = Math.min(...tempArr);
      tempArr.splice(tempArr.indexOf(minNum), 1);
      if (tempArr.includes(minNum)) {
        tempArr.push(minNum);
      }
    }
    let aver = tempArr.reduce((acc, cur) => acc + cur, 0) / tempArr.length;
    let str = getGrade(aver);
    answer += str;
  }
  return answer;
};

const getGrade = (num) => {
  if (num >= 90) return "A";
  else if (90 > num && num >= 80) return "B";
  else if (80 > num && num >= 70) return "C";
  else if (70 > num && num >= 50) return "D";
  else return "F";
};
// 일단 제거해
// 만약 해당값이 또있어 그러면 추가 아니면 그냥 가는거고

// console.log(
//   solution([
//     [75, 50, 100],
//     [75, 100, 20],
//     [100, 100, 20],
//   ])
// ); // "BBF"

console.log(
  solution([
    [50, 90],
    [50, 87],
  ])
); // "BBF"
