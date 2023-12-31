// 빈도수 세기
// 인자를 받아들이고 전달 된 인자 중 중복이 있는지
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
console.log(areThereDuplicates("a", "b", "c", "a"));
