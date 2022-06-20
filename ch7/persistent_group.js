class PGroup {
  constructor() {
    this.content = Object.create(null);
  }

  add(value) {
    const newPGroup = PGroup.from(this);
    if (!(value in newPGroup.content)) {
      newPGroup.content[value] = value;
    }
    return newPGroup;
  }

  delete(value) {
    const newPGroup = PGroup.from(this);
    if (value in newPGroup.content) {
      delete newPGroup.content[value];
    }
    return newPGroup;
  }

  has(value) {
    return value in this.content;
  }

  static from(iter) {
    let group = new PGroup();
    for (let item of iter) {
      if (!(item in group.content)) {
        group.content[item] = item;
      }
    }
    return group;
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

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
