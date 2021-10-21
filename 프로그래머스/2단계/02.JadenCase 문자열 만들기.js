// 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.

// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

const solution = (str = "") => {
  let tempArr = str.toLowerCase().split(" ");
  let answer = tempArr.map((item) => {
    item = item.replace(item[0], item[0].toUpperCase());
    return item;
  });
  return answer.join(" ");
};

// console.log(solution("3people unFollowed me"));

console.log(solution("for the last week"));

// 논리상 맞는데 if문 안에 들어가질 않음
// const solution = (str = "") => {
//   // 공백으로 구분해서 배열로 담기
//   let tempArr = str.toLowerCase().split(" ");

//   let reg = /[a-z]/g;

//   let answer = tempArr.map((item) => {
//     // 첫번째가 소문자라면
//     if (reg.test(item[0])) {
//       item = item.replace(item[0], item[0].toUpperCase());
//     }
//     return item;
//   });
//   return answer.join(" ");
// };
