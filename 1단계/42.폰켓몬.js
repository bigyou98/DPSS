const solution = (포켓몬들 = []) => {
  // 포켓몬들.length/2 만큼 뽑아야함
  // 배열에서 같은 것들 제외하기
  let once = 포켓몬들.sort().filter((data, i) => {
    return data !== 포켓몬들[i + 1];
  });
  if (once.length > 포켓몬들.length / 2) return 포켓몬들.length / 2;
  else {
    return once.length;
  }
};
console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3