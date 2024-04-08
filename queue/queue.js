class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    let dequeuedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = dequeuedNode.next;
    this.size--;
    return dequeuedNode.val;
  }
}

// 큐 빅오
// insertion - O(1)
// removal - O(1)
// searching - O(n)
// access - O(n)
