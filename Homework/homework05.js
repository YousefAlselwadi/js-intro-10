console.log('\n---------------TASK01-----------\n');
/*
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/
function countPos(numbers) {
    return numbers.filter((number) => number > 0).length;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

console.log('\n---------------TASK02-----------\n');
/*
Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/
function countA(str) {

    return str.split('').filter((string) => string.toLowerCase().includes('a')).length;

}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

console.log('\n---------------TASK03-----------\n');
/*
Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/

function countVowels(str) {
    return str.split('').filter((word) => word.toLowerCase().includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u')).length;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

console.log('\n---------------TASK04-----------\n');
/*
Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

function countVowels(str) {
    return str.split('').filter((word) => word.toLowerCase().includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u')).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

console.log('\n---------------TASK05-----------\n');
/*
Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6
countWords("1 2 3 4") 				-> 4
*/

function countWords(str) {
    wordCounter = 0;
    return str.split(' ').filter((wrd) => wrd.length > 0).length;
}

console.log(countWords("    Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));