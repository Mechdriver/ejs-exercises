require("./code/load")(
  "code/scripts.js",
  "code/chapter/05_higher_order.js",
  "code/intro.js"
);

function flattener(array) {
  return array.reduce((prevVal, currVal) => prevVal.concat(currVal), []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
//console.log(flattener(arrays));

function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

/*
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
*/

function everyLoop(array, test) {
  for (let value of array) {
    if (!test(value)) {
      return false;
    }
  }
  return true;
}

function every(array, test) {
  const modTest = (n) => {
    return !test(n);
  };

  return !array.some(modTest);
}

/*console.log(everyLoop([1, 3, 5], (n) => n < 10));
console.log(every([1, 3, 5], (n) => n < 10));

console.log(everyLoop([2, 4, 16], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));

console.log(everyLoop([], (n) => n < 10));
console.log(every([], (n) => n < 10));
*/

// Dominant Writing Direction
function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.reduce((prevScript, script) => script.count > prevScript.count ? script : prevScript).name;
}

//console.log(dominantDirection("Hello!"));
// → ltr
//console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
