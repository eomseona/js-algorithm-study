class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    // 소수 이용 - key를 더 무작위로 펼치기 위해 사용 (충돌 가능성 줄어듬)
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
  keys(key) {
    const array = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!array.includes(this.keyMap[i][j][0])) {
            array.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return array;
  }
  values(values) {
    const array = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!array.includes(this.keyMap[i][j][1])) {
            array.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return array;
  }
}

// 해시테이블 빅오 복잡도
// 삽입 - O(1)
// 삭제 - O(1)
// 접근 - O(1)
