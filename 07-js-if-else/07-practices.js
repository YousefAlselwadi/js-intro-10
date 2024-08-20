const { getRandomNumber } = require('../utils/MathHelper.js');

console.log('\n---------------TASK01-----------\n');
/*
Generate a random number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated number is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/

let r1 = getRandomNumber(-10, 10);

console.log('Random number is =', r1);

if(r1 > 0) {
    console.log('The number is POSITIVE');
}
else if(r1 < 0) {
    console.log('The number is NEGATIVE');
}
else {
    console.log('The number is ZERO');
}

console.log('\n---------------TASK02-----------\n');

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

let r2 = getRandomNumber(1, 12);
console.log('Random month is =', r2);

if(r2 === 12 || r2 === 1 || r2 === 2) {
    console.log('Winter');
}
else if(r2 === 3 || r2 === 4 || r2 === 5) {
    console.log('Spring');
}
else if(r2 === 6 || r2 === 7 || r2 === 8) {
    console.log('Summer');
}
else {  
    console.log('fall');  
}
// different way solving this
if(r2 >= 3 && r2 <= 5) console.log('Spring');
else if(r2 >= 6 && r2 <= 8) console.log('Summer');
else if(r2 >= 9 && r2 <= 11) console.log('fall');
else console.log('Winter');