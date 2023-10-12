//두개의 문자열을 받아 긴 문자열 안에 짧은 문자열이 몇개 포함되어있는지 반환하는 함수

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
