// 단어 s의 가운데 글자를 반환하는 함수
// 짝수라면 가운데 글자를 반환한다.

const solution = (str = "") => {
  let center = Math.floor(str.length / 2);
  return str.length % 2 === 0 ? str[center - 1] + str[center] : str[center];
};
console.log(solution("abcde")); //"c"
console.log(solution("qwer")); //"we"
