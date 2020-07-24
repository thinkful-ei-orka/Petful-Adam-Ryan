/* eslint-disable quotes */
"use strict";

const _Node = require("../node/_Node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  peek() {
    return this.first.value;
  }
  display() {
    let currNode = this.first;
    let resultArray = [];
    while (currNode.next !== null) {
      resultArray.push(currNode.value);
      currNode = currNode.next;
    }
    resultArray.push(currNode.value);
    return resultArray;
  }
}

module.exports = Queue;
