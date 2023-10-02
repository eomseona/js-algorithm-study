//고유값 세기 (countUniqueValues)
//countUniqueValues 함수를 구현하여 정렬된 배열을 전달하면
//해당 배열의 고유한 값의 개수를 반환한다
//empty 일 경우 0을 반환
//두 개의 포인터를 사용하여 구현할 것
function countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  let result = 0;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr.splice(left, 1, arr[right]);
      right++;
    }
  }
  arr.length && (result = left + 1);
  return result;
}
console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
