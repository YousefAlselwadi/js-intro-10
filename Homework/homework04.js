const { getRandomNumber } = require('../utils/MathHelper.js');

console.log('\n---------------TASK01-----------\n');
/*
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).

Expected Output:7 
14
21
.
.
.
.
91
98
*/

for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}

console.log('\n---------------TASK02-----------\n');
/*
Requirement:
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).

Expected Output:6
12
18 
.
.
36
42
48
*/

for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}

console.log('\n---------------TASK03-----------\n');
/*
Requirement:
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).

Expected Output:100
95
90
85
.
.
.
60
55
50
*/

for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}

console.log('\n---------------TASK04-----------\n');

/*
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!

Expected Output:The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/

for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is ${i ** 2}`);
}


console.log('\n---------------TASK05-----------\n');
/*
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10

NOTE: Use loop!!!

Expected Output:
55
*/

let sum = 0

for(let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum);

console.log('\n---------------TASK06-----------\n');

/*
Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

let ranNum = getRandomNumber(1, 10)
let factorial = ranNum;


for (let i = ranNum - 1; i > 1; i--) {
    factorial *= (i);
}
if(factorial === 0) factorial = 1;
console.log(factorial);

console.log('\n---------------TASK07-----------\n');

/*
Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.

Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s to generate it.
*/


let attempts = 0;
let ranNum1;

do {
    ranNum1 = getRandomNumber(1, 100);
    attempts++;
}while(ranNum1 % 5 !== 0);

    console.log(`The random number is ${ranNum1} and it took ${attempts} attempt/s to generate it`);
