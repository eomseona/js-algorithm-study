class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp(this.values);
    return this.values;
  }
  bubbleUp(values) {
    let idx = values.length - 1;
    const element = values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = values[parentIdx];
      if (element.priority >= parent.priority) break;
      values[parentIdx] = element;
      values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values.pop();
      this.sinkDown(this.values);
    }

    return min;
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
        if (leftElement.priority < element.priority) swap = leftIdx;
      }
      if (rightIdx < length) {
        rightElement = this.values[rightIdx];
        if (
          (swap === null && rightElement.priority < element.priority) ||
          (swap !== null && rightElement.priority < leftElement.priority)
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
