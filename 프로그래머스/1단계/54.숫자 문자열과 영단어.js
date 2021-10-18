// // 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수

// const solution = (str = "") => {
//   str = str.replace(/one/g, "1");
//   str = str.replace(/two/g, "2");
//   str = str.replace(/three/g, "3");
//   str = str.replace(/four/g, "4");
//   str = str.replace(/five/g, "5");
//   str = str.replace(/six/g, "6");
//   str = str.replace(/seven/g, "7");
//   str = str.replace(/eight/g, "8");
//   str = str.replace(/nine/g, "9");
//   str = str.replace(/zero/g, "0");
//   return Number(str);
// };

// console.log(solution("one4seveneight")); //	1478
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
console.log(solution("one4seveneight")); //	1478
