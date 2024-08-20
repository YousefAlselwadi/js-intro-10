let items = 'Apples, Oranges, Bananas, Eggs, Milk';

console.log(items.split(','));
console.log(items.split(' '));
console.log(items.split(', '));


let sent = 'I like JavaScript';

console.log(sent.split(' ')); // [ 'I', 'like', 'JavaScript' ]
console.log(sent.split('like')); // [ 'I ', ' JavaScript' ]


/*
10 | 20 | 30 | 40 | 50

*/


console.log('10 | 20 | 30 | 40 | 50'.split(' | ')); // [ '10', '20', '30', '40', '50' ]





/*
Assume you are given a string having some words
count how many words the string has

'I like JavaScript'  -> 3
'Me and you will be successful'   -> 6

*/

let str = 'Me and you will be successful';
console.log(str.split(' '),); // [ 'Me', 'and', 'you', 'will', 'be', 'successful' ]
console.log(str.split(' ').length); // 6

let smth = 'Hello';

console.log(smth.split('')); // [ 'H', 'e', 'l', 'l', 'o' ]

const result = smth.split('');

console.log(typeof result); // object

console.log()



/*
Task: used to split the string into array elements with the given separator 
RETURN: returns an array if elements 
ARGUMENTS: takes a string argument as seperater, an optional limit argument 
Change Original value: does not modifuy the original value 
STATIC OR NON-STATIC: Non-Static
*/


