// 길이가 같은 배열 A, B
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다
// 배열의 길이만큼 반복
// 두 수를 곱한 값을 누적하여 더합니다
// 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표

// 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다
//  A = [1, 4, 2] , B = [5, 4, 4]

const solution = (A = [], B = []) => {
  let sum = 0;
  let ctn = A.length;
  for (let i = 0; i < ctn; i++) {
    let A의가장작은수 = Math.min(...A);
    let B의가장큰수 = Math.max(...B);

    let A지울것 = A.indexOf(A의가장작은수);
    let B지울것 = B.indexOf(B의가장큰수);

    A.splice(A지울것, 1);
    B.splice(B지울것, 1);

    sum += A의가장작은수 * B의가장큰수;
  }

  return sum;
};

console.log(solution([1, 4, 2], [5, 4, 4])); //29
console.log(solution([1, 2], [3, 4])); //10

// A의 가장 작은거랑 B의 가장 큰거랑 곱해야함
// 하고나서 각각 배열에서 지워주기
// A의 배열의 길이만큼 반복
