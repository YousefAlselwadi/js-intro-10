const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];

const sortedNames = names.sort();

console.log(names); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]
console.log(sortedNames); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]

const numbers = [ 1, 40, 2, 3, 10, 100 ];

const numbersSorted = numbers.sort();

console.log(numbers); // [ 1, 10, 100, 2, 3, 40 ]
console.log(numbersSorted); // [ 1, 10, 100, 2, 3, 40 ]


const nums = [ 1, 40, 2, 3, 10, 4, 100 ];

nums.sort((a, b) => a - b);

console.log(nums); // [  1,  2, 3, 4, 10, 40, 10 ]




