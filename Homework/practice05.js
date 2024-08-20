const { getRandomNumber } = require('../utils/MathHelper.js');

const { CharacterHelper } = require('../utils/CharacterHelper.js');

console.log('\n----------TASK01----------\n');

/*
Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100
Test data 1:
34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter
Test data 2:
76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/
let r1 = getRandomNumber(1, 100);

console.log(`Test data 1: ${r1}`)

if(r1 <= 25) {
    console.log(`1st qaurter is ${r1}`);
} 
else if(r1 <= 50) {
    console.log(`${r1} is in the 2nd quarter`);
} 
else if(r1 <= 75) {
    console.log(`${r1} is in the 3rd quarter`);
} 
else {
    console.log(`${r1} is in the 4th quarter`);
}

if(r1 <= 50) {
    console.log(`${r1} is in the 1st half`);
} 
else {
    console.log(`${r1} is in the 2nd half`);
}

console.log('\n---------------------TASK02---------------------\n');

/*
Requirement:
Assume you are given 3 numbers between 1 and 100 
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1:
2, 4, 6
Expected result 1:
true
Test data 2:
68, 44, 2
Expected result 2:
true
Test data 3:
10, 20, 25
Expected result 3:
false
Test data 4:
51, 67, 99
Expected result 4:
false
*/

let ran1 = getRandomNumber(1, 100);
let ran2 = getRandomNumber(1, 100);
let ran3 = getRandomNumber(1, 100);

console.log(`Test data 1: ${ran1, ran2, ran3}`);

if(ran1 % 2 === 0 && ran2 % 2 === 0 && ran3 % 2 === 0) console.log(true);
else console.log(false);

console.log('\n----------TASK03----------\n');
/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.
Test data 1:
"a"
Expected result 1:
"a"  is a letter
Test data 2:
"5"
Expected result 2:
"5"  is a digit
Test data 2:
"$"
Expected result 1:
"$"  is a special character
Test data 4:
" "
Expected result 4:
" " is a whitespace
*/

let t1character = '23'; 

let t1CharacterASCII = t1character.charCodeAt(0);

if (t1CharacterASCII >= 48 && t1CharacterASCII <= 57) {
    console.log(`"${t1character}" is a digit`);
}
else if ((t1CharacterASCII >= 65 && t1CharacterASCII <= 90) || (t1CharacterASCII >= 97 && t1CharacterASCII <= 122)) {
    console.log(`"${t1character}" is a letter`);
}
else if ((t1CharacterASCII === 32)) {
    console.log(`"${t1character}" is a whitespace`)

}
else {
    console.log(`"${t1character}" is a special character`);
}



console.log('\n----------TASK04----------\n');

/*
Write a function named hasBlue() which takes a string argument 
and returns true if the string has an occurrence of blue word, 
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/


function hasBlue(str) {
    let regex = /blue/i;
    return regex.test(str);
}
console.log(hasBlue("Hello World"));
console.log(hasBlue("Javabluescript"));
console.log(hasBlue("Tech Blue Global"));
console.log(hasBlue("1234"));

console.log('\n---------------------TASK05---------------------\n');

/*
Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.
Examples:
startT("Hello World")    -> false
startT("typescript")    -> true
startT("TechGlobal")    -> true
startT("1234")    -> false
startT("ABC")    -> false
*/

function startT(str) {
    let firstChar = str[0];
    return characterHelper.isLetter(firstChar) && characterHelper.isUppercase(firstChar) && firstChar.toUpperCase() === 'T';
}

console.log(startT("Hello World"));  
console.log(startT("typescript"));    
console.log(startT("TechGlobal"));    
console.log(startT("1234"));          
console.log(startT("ABC"));


