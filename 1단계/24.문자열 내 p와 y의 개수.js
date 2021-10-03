// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다
//  'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

const solution = (str) => {
  let p_c = 0;
  let y_c = 0;
  str
    .toLowerCase()
    .split("")
    .map((i) => {
      if (i === "p") {
        p_c++;
      }
      if (i === "y") {
        y_c++;
      }
    });
  if (p_c === y_c) {
    return true;
  } else if ((p_c === y_c) === 0) {
    return false;
  } else {
    return false;
  }
};
