//팩토리얼 함수 작성

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(7));
