// 파일명에 포함된 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로 했다.

// 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다.

// 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다

// 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.
function solution(files) {
  return files.sort((a, b) => {
    const regex = /^(\D+)(\d{1,5})(?:.*)$/;
    const [, aHead, aNumber] = a.match(regex);
    const [, bHead, bNumber] = b.match(regex);
    const compareHead = aHead.toLowerCase().localeCompare(bHead.toLowerCase());
    return compareHead || +aNumber - +bNumber;
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
