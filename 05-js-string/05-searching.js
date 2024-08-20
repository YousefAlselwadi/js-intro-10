// startWith() vs endsWith() vs includes()
let str = 'TechGlobal';

console.log(str.startsWith('Hi')); // false
console.log(str.startsWith('Tech')); // true
console.log(str.startsWith('T')); // true
console.log(str.startsWith('t')); // false
console.log(str.startsWith('')); // true

console.log(str.endsWith('apple')); // false
console.log(str.endsWith('obal')); // true
console.log(str.endsWith('la')); // false
console.log(str.endsWith('l')); // true
console.log(str.endsWith('Global')); // true
console.log(str.endsWith('TechGlobal')); // true
console.log(str.endsWith('')); // true

console.log(str.includes('G')); // true
console.log(str.includes('oab')); // false
console.log(str.includes('')); // true
console.log(str.includes('TechGlobal')); // true
console.log(str.includes('Tech')); // true
console.log(str.includes('Global')); // true

/*
 startsWith()
 Task: checks if the string starts with another substring
 Return: boolean
 Arguments: takes a substring as an argument
 Change Original Value: does not change the original value 
 Static or Non-Static: non-static

 endsWith()
 Task: checks if the string ends with another substring
 Return: boolean
 Arguments: takes a substring as an argument
 Change Original Value: does not change the original value 
 Static or Non-Static: non-static

  includes()
 Task: checks if the string contains-includes another substring
 Return: boolean
 Arguments: takes a substring as an argument
 Change Original Value: does not change the original value 
 Static or Non-Static: non-static

*/

// indexOf() vs lastIndexOf()

let message = 'Can I can a can?';

message.charAt(4); // 'I'

console.log(message.indexOf('I')); // 4
console.log(message.indexOf('?')); // 15
console.log(message.lastIndexOf('I')); // 15
console.log(message.lastIndexOf('?')); // 15



console.log(message.indexOf('can')); // 6 
console.log(message.lastIndexOf('can')); // 12


console.log(message.indexOf('Can')); // 0
console.log(message.lastIndexOf('Can')); // 0


console.log(message.indexOf('')); // 0
console.log(message.lastIndexOf('')); // 16

message.indexOf('A'); // -1
message.indexOf('apple'); // -1
message.indexOf('CAN'); // -1


/*
indexOf()
Task: checks if the string contains-includes another substring
Return: returns the first index of the first found match as a number
Note: returns -1 if it cannot find the substring in the original string
Arguments: takes a substring as an argument
Change Original Value: does not change the original value 
Static or Non-Static: non-static

lastIndexOf()
Task: checks if the string contains-includes another substring
Return: returns the last index of the last found match as a number
Note: returns -1 if it cannot find the substring in the original string
Arguments: takes a substring as an argument
Change Original Value: does not change the original value 
Static or Non-Static: non-static
*/