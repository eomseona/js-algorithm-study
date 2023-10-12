//배열과 값을 받아들이고 그 값이 배열 안에 존재하는 경우 인덱스를 반환하는 함수 작성

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([100], 200)); // -1
