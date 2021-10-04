// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

const solution = (str_list, n) => {
  str_list.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else {
      // 비교 문자가 같다면 문자열 자체를 비교하는 거라서 이렇게 비교한다.
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
  });
  return str_list;
};

console.log(solution(["sun", "bed", "car"], 1)); // 	["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // 	["abcd", "abce", "cdx"]
