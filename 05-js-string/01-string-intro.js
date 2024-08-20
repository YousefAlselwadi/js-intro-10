let fname = 'John';
let lname = "doe";

let fullname1 = fname + ' ' + lname; // traditinal concatenation with + operators
let fullname2 = `${fname} ${lname}`; // concatenation using backticks (string templates - template literals) after ES6
let fullname3 = fname.concat(' ').concat(lname); // concatenation using concat() function, not used alot


console.log(fullname1); // 'John Doe'
console.log(fullname2); // 'John Doe'
console.log(fullname3); // 'John Doe'

console.log(fname);
console.log(lname);

/*
concat() function
TASK: combines 2 strings together
RETURN: returns a new sring 
ARGUMENTS: takes a string or multiple strings as an argument-prameter
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC OR NON-STATIC: non-static
*/







