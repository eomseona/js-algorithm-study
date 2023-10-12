// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 함수를 작성
// 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 안에 속해 있어야 함

function isSubsequence(str1, str2) {
  let p1 = 0;
  let p2 = 0;
  while (p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      p1++;
      p2++;
    } else p2++;
  }
  if (p1 === str1.length) return true;
  else return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
