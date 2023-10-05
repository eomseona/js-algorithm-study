//정수의 배열과 숫자가 주어졌을 때
//함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 함수를 작성
//하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다

function maxSubarraySum(arr, num) {
  let max = 0;
  let temp = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
