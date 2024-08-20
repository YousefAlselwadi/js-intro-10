let n1 = '123', n2 = '5', n3 = '5000';

console.log(n1.padStart(4, ' '));
console.log(n2.padStart(4, ' '));
console.log(n3.padStart(4, ' '));

let s1 = 'Hello', s2 = 'Hi', s3 = 'JavaScript';

console.log(s1.padEnd(10, ' '));
console.log(s2.padEnd(10, ' '));
console.log(s3.padEnd(10, ' '));

//--str------------

let str = 'Hello';

str.padStart('');

/*
padStart()
TASK: it fills the string with repeating charecters until reaching out to a specified legth 
RETURN: returns a new string
Arguments: 2 args; first is the new desired length, and the second is what you would like to fill your string with
change original value: does not change the original value 
Static or Non-Static: non static
*/






let s = 'Hi';

console.log(s.toLowerCase().replace('H', 'e').repeat(5));

let r = 'TechGlobal';
console.log(s.slice(s.indexOf('l'), s.lastIndexOf('l')).replace('0', '###').toUpperCase());