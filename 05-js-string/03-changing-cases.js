// toLowerCase() vs toUpperCase()

let company = 'techGlobal';

console.log(company.toLowerCase()); // 'techglobal'
console.log(company.toUpperCase()); // 'TECHGLOBAL'


let address = '123 St. #2, Des Plaines IL 12345';

let addressLower = address.toLowerCase();
let addressUpper = address.toUpperCase();

console.log(addressLower); // 123 st. #2, des plaines il 12345
console.log(addressUpper); // 123 ST. #2, DES PLAINES IL 12345

console.log(address); // 123 St. #2, Des Plaines IL 12345

/*
toUpperCase()
Task: converts all the leters of the string to upper case
Return: returns a new string 
Arguments: mo args
change original value: does not modify the original value 
STATIC or NON-STATIC: non-static

toLowerCase()
Task: converts all the leters of the string to Lower case
Return: returns a new string 
Arguments: mo args
change original value: does not modify the original value 
STATIC or NON-STATIC: non-static
*/

