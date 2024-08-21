const { getRandomNumber } = require('../utils/MathHelper.js');

// Output the numbers from 1 to 10 (both inclusive) -> 1 2 3 4 5 ….

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

for(let i = 100; i >= 0; i--) {
    console.log(i);
}

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 ….

for(let i = 0; i <= 50; i++) {
   if(i % 2 === 0) console.log(i);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ….

for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
}

let sum = 0;

for(let i = 1; i <= 5; i++) {
     sum += i;
}

console.log(sum);


let sum1 = 0;

for(let i = 10; i <= 15; i++) {
    sum1 += i;
}

console.log(sum1);


let product = 1;

// Find the product of all the numbers from 1 to 6 (both inclusive) ->

for(let i = 1; i <= 6; i++) {
    product *= i;
}

console.log(product);

let str = 'TechGlobal School';

for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

let str1 = 'TechGlobal School';

let countO = 0

for(let i = 0; i < str1.length; i++) {
    if(str1[i] === 'o') countO++;
}
console.log(countO);

let r1 = getRandomNumber(10, 20);

console.log(`The random Number is ${r1}`);

for(let i = 1; i <= r1; i++) {
    if(i % 2 !== 0) console.log(i);
}

/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/

let r2 = getRandomNumber(1, 10);

console.log(`The random Number is ${r2}`);

let product1 = 1

for(let i = 1; i <= r2; i++) {
    product1 *= i
}

console.log(product1);


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);

for(let i = Math.min(ran1, ran2); i <= Math.max(ran1, ran2); i++) {
    console.log(i);
}







