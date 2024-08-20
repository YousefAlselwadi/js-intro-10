let str = 'TechGlobal';

// 1. get sybstring at the beggining or in the middle --> Tech or glo
console.log(str.substring(0, 4)); // 'Tech'
console.log(str.slice(0, 4)); // 'Tech'
console.log(str.slice(4, 7)); // 'Glo'


// 2. get a substring starting from any index and going all the way till the end --> Global or bal
console.log(str.substring(4)); // 'Global'
console.log(str.slice(4)); // 'Global'

console.log(str.substring(7)); // 'bal'
console.log(str.slice(7)); // 'bal'

// Difference
let lan = 'Hello';

// Get the last 3 charecters 
console.log(lan.slice(lan.length - 3));
console.log(lan.slice(-3));

// Sc

lan.slice(4, 6);
lan.slice(-6, -4);

console.log(lan.substring(-6, -4));



/*
Slice()
Task: retrive substring from another string based on the given indexes 
RETURN: returns a new substring
ARGUMENTS: takes 1 or 2 index arguments, first one is the starting index (included), second is the ending index (excluded)
NOTE: it will work with negative indexes as well 
NOTE: if the left index is greater then the right index, then it returns empty string
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC OR NON_STATIC: non-static

Substring()
Task: retrive substring from another string based on the given indexes 
RETURN: returns a new substring
ARGUMENTS: takes 1 or 2 index arguments, first one is the starting index (included), second is the ending index (excluded)
NOTE: it will work with negative indexes and converts them to zeros. 
NOTE: if the left index is greater then the right index, it modifies to correct way and give you a meaningful substring.
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC OR NON_STATIC: non-static
*/

console.log('Batch-10'.substring(-10, 100)); // 'Batch-10 
console.log('Batch-10'.substring(3, 100)); // 'ch-10 