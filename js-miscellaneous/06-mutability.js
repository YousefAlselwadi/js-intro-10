const arr1 = [ 1, 2, 3 ];

const arr2 = arr1;

console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 1, 2, 3 ]

arr1.push(4);

console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(arr2); // [ 1, 2, 3, 4 ]


// perimitives
let str1 = 'John';
let str2 = str1;

console.log(str1); // 'John'
console.log(str2); // 'John'

str1 = 'james'

console.log(str1);
console.log(str2);


// Coppying your array to prevent multability by using spread operator
const numbers1 = [ 1, 2, 3, 4, 5 ];
const numbers2 = [...numbers1 ];

console.log(numbers1);
console.log(numbers2);

numbers1.push(6);

console.log(numbers1);
console.log(numbers2);

// Coppying your array to prevent multability by loops
const booleans1 = [ true, false, true ];
const booleans2 = [];

booleans1.forEach((el) => {
    booleans2.push(el);
});

console.log(booleans1);
console.log(booleans2);

booleans1.push('hello')

console.log(booleans1);
console.log(booleans2);


// Spread operator for loops does not work in case of nested arrays or objects 
const groups1 = [
    'John',
    ['Alex', 'Mariia'],
    ['John', 'Jane']
];

const groups2 = [ ...groups1 ];

console.log(groups1); // [ 'John', [ 'Alex', 'Mariia' ], [ 'John', 'Jane' ] ]
console.log(groups2); // [ 'John', [ 'Alex', 'Mariia' ], [ 'John', 'Jane' ] ]

groups1.push('Mark');
groups1[1][1] = 'Jessica';

console.log(groups1); // [ 'John', [ 'Alex', 'Jessica' ], [ 'John', 'Jane' ], 'Mark' ]
console.log(groups2); // [ 'John', [ 'Alex', 'Jessica' ], [ 'John', 'Jane' ] ]

// We call this copying with loops or spread Operator as SHALLOW COPY
// DEEP COPY: SAFER WAY TO PREVENT MUTIBILITY AND CAN BE ACHIVIED USING JSON