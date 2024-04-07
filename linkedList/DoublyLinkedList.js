class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.tail == null) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      currentHead.prev = this.head;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, node;
    if (index <= this.length / 2) {
      count = 0;
      node = this.head;
      while (count !== index) {
        node = node.next;
        count++;
      }
    } else {
      count = this.length - 1;
      node = this.tail;
      while (count !== index) {
        node = node.prev;
        count--;
      }
    }
    return node;
  }
  set(index, val) {
    let node = this.get(index);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
    }
    if (index === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;
      beforeNode.next = newNode;
      afterNode.prev = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
    }
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let node = this.get(index);
    let beforeNode = node.prev;
    let afterNode = node.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
}

let list = new DoublyLinkedList();
list.push("first");
console.log(list.remove(0));
console.log(list);
