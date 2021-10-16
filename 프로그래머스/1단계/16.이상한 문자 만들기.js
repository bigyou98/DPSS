// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로,
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// s	 : "try hello world"
// return : "TrY HeLlO WoRlD"

const solution = (s) => {
  // 1. 공백으로 구분해서 배열로 만듬
  let arr = s.split(" ");

  let result = [];
  // 2. 각 index에따라 판단한다.
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let tttt = [];
    for (let j = 0; j < temp.length; j++) {
      j % 2 === 0
        ? tttt.push(temp[j].toUpperCase())
        : tttt.push(temp[j].toLowerCase());
    }
    result.push(tttt);
  }
  let final = [];
  // 각배열별로 문자열로 만들어줘야함
  result.forEach((i) => {
    final.push(i.join(""));
  });
  return final.join(" ");
};

console.log(solution("try hello world"));
