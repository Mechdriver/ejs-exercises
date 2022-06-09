// Sum of Range
const range = (start, end, step = 1) => {
  let nums = [];
  if (start > end && step < 0) {
    for (let i = start; i >= end; i += step) {
      nums.push(i);
    }
    return nums;
  } else {
    for (let i = start; i <= end; i += step) {
      nums.push(i);
    }
    return nums;
  }
};

const sum = (nums) => {
  let res = 0;
  nums.forEach((num) => {
    res += num;
  });
  return res;
};

//console.log(range(1, 10));
//console.log(sum(range(1, 10)));
//console.log(range(5, 2, -1));

// Reversing an Array

const reverseArray = (array) => {
  let reversed = [];
  for (let value of array) {
    reversed.unshift(value);
  }
  return reversed;
};

const reverseArrayInPlace = (array) => {
  let j = array.length - 1;
  for (let i = 0; i < j; i++) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
    j--;
  }
  return array;
};

//console.log(reverseArray(["A", "B", "C"]));
//let arrayValue = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);

const arrayToList = (array) => {
  let root, node;
  for (let value of array) {
    if (root === undefined) {
      root = { value, rest: null };
      node = root;
    } else {
      node.rest = { value, rest: null };
      node = node.rest;
    }
  }
  return root;
};

const listToArray = (root) => {
  let array = [];
  while (root) {
    array.push(root.value);
    root = root.rest;
  }
  return array;
};

const prepend = (value, root) => {
  return { value, rest: root };
};

const nth = (root, ndx) => {
  if (root === null) {
    return undefined;
  } else if (ndx === 0) {
    return root.value;
  }
  return nth(root.rest, ndx - 1);
};

//console.log(arrayToList([10, 20]));
//console.log(listToArray(arrayToList([10, 20, 30])));
//console.log(prepend(10, prepend(20, null)));
//console.log(nth(arrayToList([10, 20, 30]), 1));

const deepEqual = (valA, valB) => {
  if (typeof valA === "object") {
    if (valA !== null) {
      for (let key of Object.keys(valA)) {
        if (!deepEqual(valA[key], valB[key])) {
          return false;
        }
      }
      return true;
    }
  }
  return valA === valB;
};

let obj = { here: { is: "an" }, object: 2 };
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
//console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
console.log(deepEqual(undefined, undefined));
