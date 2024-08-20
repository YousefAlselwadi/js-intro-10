console.log('\n---------------TASK01-----------\n');

let str1 = "5";
let str2 = "2";

let num1 = Number(str1), num2 = Number(str2);

console.log(`The sum of 5 and 2 = ${num1 + num2}`);
console.log(`The product of 5 and 2 = ${num1 * num2}`);
console.log(`The division of 5 and 2 = ${num1 / num2}`);
console.log(`The subtraction of 5 and 2 = ${num1 - num2}`);
console.log(`The remainder of 5 and 2 = ${num1 % num2}`);
console.log(`The exponentiation of 5 and 2 = ${num1 ** num2}`);

console.log('\n---------------TASK02-----------\n');

let s1 = "200", s2 = "-50";

let sn1 = Number(s1), sn2 = Number(s2);

let ave = sn1 + sn2;

console.log(`The greatest value is = ${Math.max (sn1, sn2)}`);
console.log(`The smallest value is = ${Math.min (sn1, sn2)}`);
console.log(`The average is = ${(ave /2)}`);
console.log(`The absolute difference is = ${Math.abs (sn1 - sn2)}`);

console.log('\n---------------TASK03-----------\n');
let ranNum1_1_50 = Math.ceil(Math.random() * 50);
let ranNum2_1_50 = Math.ceil(Math.random() * 50);

console.log(ranNum1_1_50);
console.log(ranNum2_1_50);

console.log(`The absolute difference between numbers is = ${Math.abs (ranNum1_1_50 - ranNum2_1_50)}`);


console.log('\n---------------TASK04-----------\n');

let ranNum1 = Math.floor (Math.random() * 50) + 1;
let ranNum2 = Math.floor (Math.random() * 50) + 1;
let ranNum3 = Math.floor (Math.random() * 50) + 1;
let ranNum4 = Math.floor (Math.random() * 50) + 1;
let ranNum5 = Math.floor (Math.random() * 50) + 1;


let max = Math.max(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5);
let min = Math.min(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5);

console.log(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5);

console.log(`The max value = ${max}`);
console.log(`The min value = ${min}`);


console.log('\n---------------TASK05-----------\n');

let ranNumber1 = Math.floor (Math.random() * (51)) + 50;
let ranNumber2 = Math.floor (Math.random() * (51)) + 50;
let ranNumber3 = Math.floor (Math.random() * (51)) + 50;

console.log(ranNumber1, ranNumber2, ranNumber3);
console.log(`
The number 1 = ${ranNumber1}
The number 2 = ${ranNumber2}
The number 3 = ${ranNumber3}
The sum of the numbers is = ${ranNumber1 + ranNumber2 + ranNumber3}`);


console.log('\n---------------TASK06-----------\n');
let r1 = Math.floor ( Math.random() * (100)) + 1 
let r2 = Math.floor ( Math.random() * (100)) + 1 
let r3 = Math.floor ( Math.random() * (100)) + 1 

console.log((r1 > 25) && (r2 > 25) && (r3 > 25));

console.log('\n----------------TASK07-----------\n');

let person = 'Selwadi';

console.log(`
    The length of the name is = ${person.length}
    The first character in the name is = ${person[0]}
    The last character in the name is = ${person[person.length -1]}
    The first 3 characters in the name are = ${person.slice(0, 3)}
    The last 3 characters in the name are = ${person.slice(-3)}
    `);

