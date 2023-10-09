//문자열을 받아 그 문자열의 역순인 문자열 반환

function reverse(str) {
  if (str.length === 1) return str[0];
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

console.log(reverse("awesome"));
