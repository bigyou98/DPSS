// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 둘중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다
// 둘다 공백인 부분은 전체지도에서도 공백이다.

// 정수 배열로 암호화됨
// 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

// 정수를 2진수로 복호화해야함
// 정수 2진수로 바꾸는 방법  : 이진수 = 정수.toString(2); '111101'

// 원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.
const solution = (n, arr1 = [], arr2 = []) => {
  let answer = [];
  let temp = "";
  for (let i = 0; i < n; i++) {
    let arrI = arr1[i].toString(2).split("");
    let arrJ = arr2[i].toString(2).split("");
    temp = "";
    if (arrI.length !== n) {
      let qqq = n - arrI.length;
      for (let i = 0; i < qqq; i++) {
        arrI.unshift("0");
      }
    }
    if (arrJ.length !== n) {
      let www = n - arrJ.length;
      for (let i = 0; i < www; i++) {
        arrJ.unshift("0");
      }
    }
    for (let j = 0; j < n; j++) {
      // 한쪽이라도 #이면 #추가
      if (arrI[j] === "1" || arrJ[j] === "1") {
        temp += "#";
      }
      // 둘다 공백이면 ' '추가
      else if (arrI[j] === "0" && arrJ[j] === "0") {
        temp += " ";
      }
    }
    answer.push(temp);
  }
  return answer;
};
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
