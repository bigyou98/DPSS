// 1S2D*3T	37
// 1D2S#10S	9

// S : 1 D : 2 T : 3 는 제곱 수
// 옵션 * , #
// * 은 그전의 점수와 해당 점수 2배, 1번째도 적용가능
// # 은 해당 점수가 마이너스로 변환하기
// * #이 중첩된 경우 -2배 적용

const solution = (str = "") => {
  const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let tempArr = [];
  let temp = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1" && str[i + 1] === "0") {
      temp = 10;
      switch (str[i + 2]) {
        case "S":
          temp = temp ** 1;
          break;
        case "D":
          temp = temp ** 2;
          break;
        case "T":
          temp = temp ** 3;
          break;
      }
      switch (str[i + 3]) {
        case "*":
          if (tempArr.length === 0) {
            temp *= 2;
          } else {
            // 본인과 그전의 점수에 2배
            tempArr[tempArr.length - 1] *= 2;
            temp *= 2;
          }
          break;

        case "#":
          // -1
          temp *= -1;
          break;
      }
      tempArr.push(temp);
    } else if (numArr.includes(str[i])) {
      temp = Number(str[i]);
      switch (str[i + 1]) {
        case "S":
          temp = temp ** 1;
          break;
        case "D":
          temp = temp ** 2;
          break;
        case "T":
          temp = temp ** 3;
          break;
      }
      switch (str[i + 2]) {
        case "*":
          if (tempArr.length === 0) {
            temp *= 2;
          } else {
            // 본인과 그전의 점수에 2배
            tempArr[tempArr.length - 1] *= 2;
            temp *= 2;
          }
          break;

        case "#":
          // -1
          temp *= -1;
          break;
      }
      tempArr.push(temp);
    }
  }

  // tempArr의 합
  return tempArr.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution("1S2D*3T")); // 37
console.log(solution("1D2S#10S")); // 9
