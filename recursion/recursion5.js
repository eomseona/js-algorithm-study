//숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 재귀함수를 작성

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
