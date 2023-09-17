class Element {
  constructor(datum, next = null) {
    this.value = datum;
    this.left = next;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.left;
  }

  isTail() {
    if (this.left === null) {
      return true;
    } else {
      return false
    }
  }
}


class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    if (this.list.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.isEmpty()){
      return null
    } else {
      return this.list[this.list.length-1].value;
    }
  }

  head() {
    if (this.size() > 1) {
      return this.list[this.list.length-1];
    } else {
      return this.list[0]
    }
  }

  push(value) {
    let link;
    if (this.isEmpty()) {
      link = null;
    } else {
      link = this.list[this.list.length-1]
    }
    let elem = new Element(value, link);
    this.list.push(elem);
  }

  pop() {
    return this.list.pop().value;
  }


  static fromArray(array) {
    let  /////// construct new list, return this list...
    array.forEach(item => {
      this.push(item)
    })
  }
}

module.exports = { SimpleLinkedList, Element }