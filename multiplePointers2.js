// 다중포인터 이용
// 인자를 받아들이고 전달 된 인자 중 중복이 있는지
function areThereDuplicates(...args) {
  //알파벳순 정렬(숫자의 경우에도 같은 수는 연속되어 배치됨)
  args.sort();
  console.log(args);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
