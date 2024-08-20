// [] vs CharAt() vs codeCharAt()

let str = 'TechGlobal';

// get the first charecter

console.log(str[0]); // 'T'
console.log(str.charAt(0)); // 'T'
console.log(str.at(0)); // 'T'

console.log(str.charCodeAt(0)); // 84

// get the last charecter
console.log(str[str.length - 1]); // l 
console.log(str.charAt(str.length - 1)); // l
console.log(str.at(str.length -1)); // l

let city = 'Rome'; // 0 1 2 3 

console.log(city[-1]); // undefined
console.log(city.charAt(-1)); // '' 
console.log(city.at(-1)); // 'e'


console.log(city[4]); // undefined
console.log(city.charAt(4)); // ''
console.log(city.at(4)); // undefined

/*
[] property access is the most used when getting charecters starting from left index (0)
    [0] returns the first charecter
    [1] returns the second charecter
at() method is useful getting charecters starting from left index using negative indices
    at (-1) returns the last charecters
    at(-2) returns the second lat charecter 

[] property access
 Task: gets a single charecter from the string using an index
 Return: returns the single charecter as as string
 Arguments: index
 Change Original Value: does not modify the original value 
 Styatic or Non-Static: non-static


 charAt() method
 Task: gets a single charecter from the string using an index
 Return: returns the single charecter as as string
 Note: it returns empty string '' if the given index is not valid
 Arguments: index
 Change Original Value: does not modify the original value 
 Styatic or Non-Static: non-static


 charCodeAt() method
 Task: gets a single charecter from the string using an index
 Return: returns the single charecter as as string
 Note: it returns empty string '' if the given index is not valid
 Arguments: index
 Change Original Value: does not modify the original value 
 Styatic or Non-Static: non-static

*/


console.log('goodmorning'.at[-3]);