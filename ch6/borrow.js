let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
let hasOwnPropertySymbol = Symbol("hasOwnProperty");
map[hasOwnPropertySymbol] = Object.hasOwnProperty;
console.log(map[hasOwnPropertySymbol]("one"));
// → true


//Given solution
//console.log(Object.prototype.hasOwnProperty.call(map, "one"));