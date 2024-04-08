class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      let currentFirst = this.first;
      this.first = node;
      this.first.next = currentFirst;
    }
    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let poppedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = poppedNode.next;
    this.size--;
    return poppedNode.val;
  }
}

// 스택 빅오
// insertion - O(1)
// removal - O(1)
// searching - O(n)
// access - O(n)
