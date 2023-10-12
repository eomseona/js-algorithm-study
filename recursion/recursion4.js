//숫자를 받으면 0부터 함수에 전달된 숫자까지 모든 수를 더하는 함수 작성

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
