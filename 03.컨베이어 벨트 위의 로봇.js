const fs = require("fs");
const input = fs.readFileSync("00.input.txt").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

const solution = (N, K, arr) => {
  const robots = new Array(N).fill(false);
  let stage = 0;

  // 0의 갯수가 K보다 작을때 동작함
  // 즉, 0의 갯수가 K랑 같거나 커지면 while문 종료
  while (getZeroCount(arr) < K) {
    //일단 시작할때 stage 증가
    stage++;
    // 돌리기
    rotate(arr, robots);

    // 한칸 내리는 거임
    if (robots[N - 1]) removeNthRobot(robots, N - 1);

    moveRobots(arr, robots, N);

    // 한칸 올리는 거임
    if (robots[N - 1]) removeNthRobot(robots, N - 1);

    addRobots(arr, robots);
  }
  return stage;
};

// 현재 arr이 가진 0의 갯수
const getZeroCount = (arr) => {
  arr.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);
};

// 회전하기
const rotate = (arr, robots) => {
  // arr의 맨마지막을 빼고 last에 담는다
  const last = arr.pop();
  // arr의 맨앞에 last를 넣는다
  arr.unshift(last);

  // robots배열의 마지막을 지운다.
  robots.pop();
  // 맨앞에 false를 넣는다.
  robots.unshift(false);
};

// 로봇 이동하기
const moveRobots = (arr, robots, N) => {
  for (let i = N - 2; i > -1; i--) {
    // robots이 없다면
    if (!robots[i]) continue;
    // 다음 칸에 robots이 없고 내구도가 0이 아니라면
    if (!robots[i + 1] && arr[i + 1] > 0) {
      // 로봇 이동
      robots[i + 1] = true;
      // 원래 있던 칸 false
      robots[i] = false;
      // 내구도 줄이기
      arr[i + 1] -= 1;
    }
  }
};

// 로봇 추가하기
const addRobots = (arr, robots) => {
  // arr이 내구도니까 계속 pop하고 unshift하면서 도니까 가능
  if (arr[0] > 0) {
    arr[0] -= 1;
    robots[0] = true;
  }
};

// 로봇 지우기
const removeNthRobot = (robots, n) => {
  robots[n] = false;
};
