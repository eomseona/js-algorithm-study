// 배열과 콜백을 받아들이는 재귀함수를 작성
// 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true, 아니면 false 반환

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0]) === true) return true;
  else return someRecursive(arr.slice(1), callback);
}

const isOdd = (val) => val % 2 !== 0;
console.log(someRecursive([1, 6, 8], isOdd)); //false;
