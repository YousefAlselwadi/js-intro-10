// Array stores multiple elements 

const myNumberArray = [ 1, 2, 3, 4, 5 ];

// Printing the array 
console.log(myNumberArray); // [ 1, 2, 3, 4, 5 ]

// size of the array: how many we have in the array
let size = myNumberArray.length;

console.log('The size of the array is =', size);

// Accessing array elements using index/indices
let elementAtIndex2 = myNumberArray[2]; // 3

// Updating array elements using indexes
myNumberArray[4] = 99;

console.log(myNumberArray[4]); // 99


// Get the first elements in the array 
console.log(myNumberArray[0]); // 1

// Get last element in the array
console.log(myNumberArray[myNumberArray.length - 1]); // 99 

// creating array using constructer
const myWords = new Array('I', 'Like', 'Arrays');

console.log(myWords); // [ 'I', 'Like', 'Arrays' ]


const arr = []; // empty array or new array()
arr.length; // 0

arr[5] = 10;

console.log(arr);
console.log(arr.length); // 6


// Mix data in the array 

const mix = [ 10.5, 'Hello', null, undefined, 5, NaN, true, 2 === '2' ];
console.log(mix.length); // 8

mix[1].length; // 4
mic[1].slice(0, 2); // 'Go'

mix[0].toFixed(0); // 10.54
