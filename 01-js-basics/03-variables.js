// var-let-const keywords are used for variables
// 1. let allows us to change the value of the variables at any point in the program

let firstname = 'John';

console.log(firstname); // 'John'

// Re-assign a new value to a variable
firstname = 'James';

console.log(firstname); // 'James'

// 2. const stands for constant 
// pi = 3.14
// g = 10

const pi = 3.14;

console.log(pi); // 3.14

pi = 10; // Error: TypeError Assignment to constant variable

console.log(pi); // Not executed

// 3. var
var lastName = 'Doe';

lastName = 'Smith';

console.log(lastName); // 'Smaith'

// Another difference bt let and const
let city = 'Chicago'; // variable initialization = declare a variable and assign a value

let country; // declaring a variable or variable decleration 
country = 'US'; // value assignment to a variable


// const firstMonth // Not allowed, constant must always be initialized

// firstMonth = 'January';

const firstMonth = 'January'; // constants MUST be initialized 

let numberOFStudentInBatch10; // undifined
console.log(numberOFStudentInBatch10); // 'undifined'


numberOFStudentInBatch10 = 20;
console.log(numberOFStudentInBatch10); //20
