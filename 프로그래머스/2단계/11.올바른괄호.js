const solution = (str = "") => {
  let sum = 0;
  if (str[0] === ")") return false;
  if (str[str.length - 1] === "(") return false;
  for (let i = 0; i < str.length; i++) {
    if (sum === 0 && str[i] === ")") {
      return false;
    } else if (str[i] === "(") {
      sum++;
    } else if (str[i] === ")") {
      sum--;
    }
  }
  return sum === 0;
};

console.log(solution("()))((()"));
console.log(solution("())())"));
