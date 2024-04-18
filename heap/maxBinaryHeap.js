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
  extractMax() {
    const max = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values.pop();
      this.sinkDown(this.values);
    }

    return max;
  }
  sinkDown(values) {
    let idx = 0;
    const length = values.length;
    const element = values[0];
    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let leftElement, rightElement;
      let swap = null;

      if (leftIdx < length) {
        leftElement = this.values[leftIdx];
        if (leftElement > element) swap = leftIdx;
      }
      if (rightIdx < length) {
        rightElement = this.values[rightIdx];
        if (
          (swap === null && rightElement > element) ||
          (swap !== null && rightElement > leftElement)
        )
          swap = rightIdx;
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(3);
heap.insert(4);
heap.insert(7);
heap.insert(2);
heap.insert(5);
console.log(heap);
console.log(heap.extractMax());
