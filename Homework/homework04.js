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

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
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

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
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

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
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

for (let i = 0; i <= 7; i++) {
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

for (let i = 1; i <= 10; i++) {
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


for(let i = 2; i <= random; i++){
    factorial *= i
}

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
} while (ranNum1 % 5 !== 0);

console.log(`The random number is ${ranNum1} and it took ${attempts} attempt/s to generate it`);

console.log('\n---------------TASK08-----------\n');

/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
*/

const countries = [ 'Germany', 'Argentina', 'Ukraine', 'Romania' ];

console.log(countries);
console.log(countries.sort());


console.log('\n---------------TASK09-----------\n');
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/
const cartoonDogs = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];
console.log(cartoonDogs);
console.log(cartoonDogs.includes('Pluto'));

// const cartoonDogs = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];

// console.log(cartoonDogs);

// for(const Dog of cartoonDogs) {
//     if(Dog.includes('Pluto')) {
//         console.log(false);
//     } 
//     else console.log(true);
//     break;
// }


console.log('\n---------------TASK10-----------\n');
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

const cartoonCats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];

console.log(cartoonCats.sort());
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'));

// const cartoonCats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];

// console.log(cartoonCats.sort());

// for (const cat of cartoonCats) {
//     if (cat === 'Garfield' && cat === 'Felix') {
//        console.log(true);
//     }
//     else console.log(false);
//     break;
// }

console.log('\n---------------TASK11-----------\n');
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

const numbers = [ 10.5, 20.75, 70, 80, 15.75 ];

console.log(numbers);

for(const number of numbers) {
    console.log(number);
}

console.log('\n---------------TASK12-----------\n');
/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/

const objects = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];
let count = 0
let counter = 0


console.log(objects);

for(const object of objects) {
    if(object.toUpperCase().startsWith('B') || object.toUpperCase().startsWith('P')) count++;
}
console.log(count);

for (const object of objects) {
    if(object.toLowerCase().includes('book') || object.toLowerCase().includes('pen')) counter++
}
console.log(counter);


console.log('\n---------------TASK13-----------\n');
/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/

const numberArr = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];


let moreThan10 = 0; 
let lessThan10 = 0;
let is10 = 0; 

for (let number of numberArr) {
    if (number < 10) lessThan10++;
    else if (number > 10) moreThan10++;
    else is10++;
}

console.log(numberArr);
console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that are less than 10 = ${lessThan10}`);
console.log(`Elements that are 10 = ${is10}`);

console.log('\n---------------TASK14-----------\n');
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

const arr1 = [ 5, 8, 13, 1, 2 ];
const arr2 = [ 9, 3, 67, 1, 0 ];
let arr3 = [];

for (let i = 0; i <= arr1.length - 1; i++) {
    arr3.push(Math.max(arr1[i], arr2[i]))
}

console.log(`1st array is = [ ${arr1} ]`);
console.log(`2nd array is = [ ${arr2} ]`);
console.log(`3nd array is = [ ${arr3} ]`);

console.log('\n---------------TASK15-----------\n');
/*
Requirement:
Write a function named as firstDuplicate() 
which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/

function firstDuplicate(array) {

    for (let i = 0; i < array.length; i++) {
        for (let r = i + 1; r < array.length; r++) {
            if (array[i] === array[r]) return array[i];
        }
    }
    return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])); 
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar' ]));



console.log('\n---------------TASK16-----------\n');
/*
Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array.
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])
getDuplicates([ 1, 2, 5, 0, 7 ])
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])	
*/


function getDuplicates(arrays)  {
    const container = []; 
    const duplicates = [];

    for (let array of arrays) {
        if(container.includes(array) && !duplicates.includes(array)) duplicates.push(array)
            else container.push(array)
    }
    return duplicates;
};
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));



console.log('\n---------------TASK17-----------\n');
/*
Requirement:
Write a function named as reverseStringWords() which takes a string as an argument 
and returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
*/

function reverseStringWords(str) {
    let words = str.trim().split(/\s+/);

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }

    return words.join(' ');
}

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));

console.log('\n---------------TASK18-----------\n');
/*
Requirement:
Write a function named as getEvens() which takes 2 number arguments 
and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
*/

function getEvens(num1, num2) {

    let even = [];
    let greaterNumber = Math.max(num1, num2);
    let smallerNumber = Math.min(num1, num2);

    for(let i = smallerNumber; i <= greaterNumber; i++) {
        if(i % 2 === 0) even.push(i);
    };

    return even;
};

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));



console.log('\n---------------TASK19-----------\n');
/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments 
and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/

function getMultipleOf5(num1, num2) {

    let divisibleBy5 = [];
    let greaterNumber1 = Math.max(num1, num2);
    let smallerNumber1 = Math.min(num1, num2);

    for(let i = greaterNumber1; i >= smallerNumber1; i--) {
        if(i % 5 === 0) divisibleBy5.push(i);
    };

    return divisibleBy5;
};

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));


console.log('\n---------------TASK20-----------\n');
/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/

function fizzBuzz(num1, num2) {

    let arr = [];
    let greaterNumber2 = Math.max(num1, num2)
    let smallerNumber2 = Math.min(num1, num2)

    for(let i = smallerNumber2; i <= greaterNumber2; i++){
        if(i % 5 === 0 && i % 3 === 0) arr.push('FizzBuzz');
        else if(i % 5 === 0) arr.push('Buzz');
        else if(i % 3 === 0) arr.push('Fizz');
        else arr.push(i);
    };

    return arr.join(' | ');
};

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));

