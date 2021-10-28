// 벨트가 한 칸 회전하면 1번부터 2N-1번까지의 칸은 다음 번호의 칸이 있는 위치로 이동하고
// 2N은 1번칸으로 이동한다.

// i번 칸의 내구도는 Ai이다.

// 1번 칸이 있는 위치를 "올리는 위치"
// N번 칸이 있는 위치를 "내리는 위치"

// 박스는 올리는 위치에만 올릴 수 있다
// 언제든지 박스가 내리는 위치에 도달하면 그 즉시 내린다.

// 박스를 올리는 위치에 올리거나 박스가 어떤 칸으로 이동하면 그 칸의 내구도는 즉시 1만큼 감소한다.

// 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다. 만약 이동할 수 없다면 가만히 있는다
// 로봇이 이동하기 위해서는 이동하려는 칸에 로봇이 없으며, 그 칸의 내구도가 1 이상 남아 있어야 한다.

// 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 박스를 올린다.
// 내구도가 0인 칸의 개수가 K개 이상이라면 과정을 종료한다. 그렇지 않다면 1번으로 돌아간다.

// 종료되었을 때 몇 번째 단계가 진행 중이었는지 구해보자. 가장 처음 수행되는 단계는 1번째 단계이다.

const fs = require("fs");
const [x, ...arr] = fs
  .readFileSync("00.input.txt")
  .toString()
  .trim()
  .split("\n");

let cnt = 1;

// 레일 갯수
let n = Number(x.charAt(0));

// 내구도가 0인 칸의 갯수
let k = Number(x.charAt(2));

let conveyorBelt = arr[0].split(" ").map(Number);

// 중지됬는지 확인하는 변수

// k가 0이 된다면 종료
while (k !== 0) {
  // 일단 cnt 올리고 시작
  cnt++;
  for (let i = 0; i < 2 * n; i++) {
    // i 가 한칸임
    // 0이 아니라면
    if (conveyorBelt[i] !== 0) {
      conveyorBelt[i] = conveyorBelt[i] - 1;
    } else {
      // 0이라면 브레이크
      k--;
      continue;
    }
  }
}

console.log(cnt);
