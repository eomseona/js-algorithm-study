// 빈도수 세기- validAnagram
// 두 개의 문자열이 주어졌을 때,
// 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다.
// 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다.
// (예시: cinema -> iceman)

function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const checked = {};
  for (let val of arr1) {
    checked[val] ? (checked[val] += 1) : (checked[val] = 1);
  }
  for (let val of arr2) {
    if (!checked[val]) return false;
    else checked[val] -= 1;
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aax", "xxa"));
