class Group {
  constructor() {
    this.content = Object.create(null);
  }

  add(value) {
    if (!(value in this.content)) {
      this.content[value] = value;
    }
  }

  delete(value) {
    if (value in this.content) {
      delete this.content[value];
    }
  }

  has(value) {
    return value in this.content;
  }

  static from(iter) {
    let content = new Group();
    for (let item of iter) {
      content.add(item);
    }
    return content;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.keys = Object.keys(group.content);
    this.ndx = 0;
  }

  next() {
    if (this.ndx >= this.keys.length) {
      return { done: true };
    }

    let value = this.keys[this.ndx];
    this.ndx++;
    return { value, done: false };
  }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
