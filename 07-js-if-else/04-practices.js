const{ getRandomNumber } = require('../utils/MathHelper.js');

console.log('\n---------------TASK01-----------\n');

/*
generate a random number between 1 and 10 (both inclusive)
and check if the number is 7
if it is 7 print true 
otherwise, print false

PSEUDO CODE
1. Generate a randomNumber
2. chck if it is 7 or not
3. depending on the condition pring the result
*/

let r1 = getRandomNumber(1, 10);

console.log('Random number =', r1)
if (r1 === 7) {
    console.log(true);
}
else {
    console.log(false);
}

r1 === 7 ? console.log(true) : console.log(false);


let gender = 'John';

let name = gender === 'female' ? 'Jane' : 'John'

console.log(name);

console.log('\n---------------TASK02-----------\n');

/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

5   -> 'ODD'
8   -> 'EVEN'
*/


let r2 = getRandomNumber(1, 10);

console.log('Random number is =', r2)
if (r2 % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}

function shorter(word1, word2) {
    if (word1.length < word2.length) {
      return word1;
    }
    else if (word1.length > word2.length) {
      return word2;
    }
    else return word2;
  }

console.log(shorter("Tech", "Global"));  // -> "Tech"
console.log(shorter("Hello", "Hi"));     // -> "Hi"
console.log(shorter("Hello", "World"));

