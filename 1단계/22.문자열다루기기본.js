// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// "a234"	false
// "1234"	true
const solution = (str) => {
  if (str.length === 4 || str.length === 6) {
    if (str.includes("e")) {
      return false;
    }
    return isNaN(Math.round(str)) ? false : true;
  } else {
    return false;
  }
};

console.log(solution("a234")); // NaN
console.log("\n");
console.log(solution("1234")); // 1234
