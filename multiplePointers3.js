//정렬된 정수 배열과 목표 평균이 주어졌을 때
//배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인
//목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있다.
function averagePair(arr, average) {
  let first = 0;
  let second = arr.length - 1;
  while (first < second) {
    if ((arr[first] + arr[second]) / 2 === average) return true;
    else if ((arr[first] + arr[second]) / 2 < average) first++;
    else second--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
