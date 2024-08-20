const arr1 = [1, 2], arr2 = [55, 56], arr3 = [ 101, 102, 103 ];

console.log(arr1); // [ 1, 2 ]
console.log(arr2); // [ 55, 56 ]
console.log(arr3); // [ 101, 102, 103 ]

const arr1Arr2 = arr1.concat(arr2);
const arr1Arr2Arr3 = arr1.concat(arr2, arr3);

console.log(arr1); // [ 1, 2 ]
console.log(arr2); // [ 55, 56 ]
console.log(arr3); // [ 101, 102, 103 ]

console.log(arr1Arr2); // [ 1, 2, 55, 56 ]
console.log(arr1Arr2Arr3); // [  1,   2,  55, 56, 101, 102, 103 ]

console.log(arr3.concat(arr1)); // [ 101, 102, 103, 1, 2 ]

// We cannot use + operator for concetenation of arrays

// we can also use spread operator to concetinate arrays
const obj1 = [ 'Watch', 'Phone', 'Laptop' ];
console.log(obj1); // [ 'Watch', 'Phone', 'Laptop' ]
console.log(...obj1); // Watch Phone Laptop 


const nums = [ 10, 20, 30, 25, 99, 1 ];


console.log(Math.min(...nums)); // 1
console.log(Math.max(...nums)); // 99