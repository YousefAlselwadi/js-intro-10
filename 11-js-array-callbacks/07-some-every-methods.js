const numbers = [-5, 0, 5, 10, 23, -10];
// check if some elements are divisible by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true

let NumsDivBy5 = numbers.some((number) => number % 5 === 0);
let NumsPos = numbers.every((number) => number > 0);
let NumsNeg = numbers.some((number) => number < 0);

console.log(NumsDivBy5);
console.log(NumsPos);
console.log(NumsNeg);

