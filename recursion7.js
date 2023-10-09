// 전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true
// 팔린드롬이 아닌 경우 false를 반환하는 재귀함수 작성

function isPalindrome(arr) {
  let leng = arr.length;
  if (leng <= 1) return true;
  if (arr[0] === arr[leng - 1]) {
    return isPalindrome(arr.slice(1, leng - 1));
  } else return false;
}

console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
