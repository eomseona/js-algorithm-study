class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp(this.values);
    return this.values;
  }
  bubbleUp(values) {
    let idx = values.length - 1;
    const element = values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = values[parentIdx];
      if (element <= parent) break;
      values[parentIdx] = element;
      values[idx] = parent;
      idx = parentIdx;
    }
  }
}

// let heap = new MaxBinaryHeap();
// heap.insert(10);
// console.log(heap.insert(20));
