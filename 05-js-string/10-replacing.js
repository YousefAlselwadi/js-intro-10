let str = 'I like apple and pineapple';

// replace apple with orange 
console.log(str.replace('apple', 'orange')); // 'I like orange and pineapple'


// replace all apple accourances with orange
let strR2 = str.replaceAll('apple', 'orange');

console.log(strR2); // 'I like orange and pineorange'


/*
replace()
Task: used to replace an occurreance of a substring within the original string 
RETURN: it rerturns a new string with the replaced value
ARGUMENTS: takes a string argument as seperater, an optional limit argument 
Change Original value: does not modifuy the original value 
STATIC OR NON-STATIC: Non-Static 
*/


console.log('hello everyone'.replaceAll('e', 'a').replaceAll('o', 'u')); // 




