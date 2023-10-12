//이진탐색 함수 작성

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (arr[mid] !== val && left <= right) {
    mid = Math.floor((right + left) / 2);
    if (arr[mid] > val) right = mid - 1;
    else if (arr[mid] < val) left = mid + 1;
    else return mid;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 9)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
