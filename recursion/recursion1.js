//밑과 지수를 받아 거듭제곱을 구하는 함수/

function power(base, index) {
  if (index === 0) return 1;
  return base * power(base, index - 1);
}

console.log(power(2, 4));
