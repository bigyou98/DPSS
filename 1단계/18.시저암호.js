// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// if 소문자 영역이면 z일때 a로 넘어가게끔
// 대문자 영역은 65~90
// 소문자 영역은 97~122
// 순환하게 끔 해야함 지금 순환이 안되고있음
const solution = (str, n) => {
  result = "";
  for (let i = 0; i < str.length; i++) {
    // 해당 아스키코드
    let org = str.charCodeAt(i);

    // 공백문자일때
    if (org === 32) {
      result += " ";
      continue;
    }
    // 대문자 범위일때
    else if (org >= 65 && org <= 90) {
      // z 를 넘어가는 경우
      if (org + n > 90) {
        // b에 25를 더하면 a
        org = org + n - 26;
      } else {
        org = org + n;
      }
    }
    // 소문자 일 때
    else if (org >= 97 && org <= 122) {
      if (org + n > 122) {
        org = org + n - 26;
      } else {
        org = org + n;
      }
    }
    result += String.fromCharCode(org);
  }
  return result;
};

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
console.log(solution("a", 2));
console.log(solution("b", 25));
console.log(solution("AaZz", 25));
