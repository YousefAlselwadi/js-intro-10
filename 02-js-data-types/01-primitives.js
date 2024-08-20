/// string

let name = 'John';
console.log(name); // 'John'
console.log(typeof name); // string


// number
let num1 = 10; // absolute number 
let num2 = 3.14; // string decimal number

console.log(num1, num2); // 10 3.14

console.log(typeof num1, typeof num2);

// boolean: are used with if else condition
let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5; 

let isUsernameCorrect = 'admin' === 'johndoe';

console.log(isRainy); // false
console.log(isAuthenticated); // true
console.log(isRainy); // false
console.log(isUsernameCorrect); // false

console.log(typeof isAuthenticated);
console.log(typeof result);

// undifined vs null 
let className1;
let className2 = undefined;

let courseName = null;

console.log(className1); // 'undifined'
console.log(className2); // 'undifined'
console.log(courseName); // 'nul' 


console.log(typeof className1); // 'undifined'
console.log(typeof className2); // 'undifined'
console.log(typeof courseName); // 'object'

className1 = 'Batch-10';
courseName = 'SDET Program';
console.log(className1); // String
console.log(courseName); //String


// Changing types
let address = 'Chicago';
console.log( typeof address); //string

address = 12345; 
console.log(typeof address); //number

// bigint 
let n1 = 1726372764894834556n;
let n2 = BigInt("7373897983930333");

console.log(n1);
console.log(n2);

console.log(typeof n1); // 'BigInt' 
console.log(typeof n2); // 'BigInt' 

console.log(Number.MAX_SAFE_INTEGER); // 87463648746838649 we can store as a number 
console.log(Number.MIN_SAFE_INTEGER); // -8747438778347438 we can store as a number

let safeMaxInt = 87463648746838649n; // it is recommeneded to go with bigint
let safeMinInt = -8747438778347438n; // it is recommeneded to go with bigint

// symbol
let s1 = symbol('UA');
console.log(s1);
console.log(typeof s1); // symbol




