/*
create a function which prints 'HI' when invoked.
*/
// this is void zero argument function
function sayHI() {
    console.log('HI');
    console.log('World');
}

sayHI(); // 'HI'

/*
write a function which takes a string name as an argument 
And it returns 'hello (name)!'

sayHello('Alex')   --> 'Hello, Alex!'
*/
 function sayHello(name) {
    return `Hello, ${name}`;
 }

let result = sayHello('Bermet');

console.log(result); // 'Hello, Bermet'

console.log(sayHello('John')); // Hello, John


/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greeting}, {name}!'

greet('Good Morning', 'John'); // Output: 'Good Morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
greet('Hi', 'Hicran'); // Output: 'Hi, Hicran!'
*/

function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
}

greet('Hello', 'Malik');
greet('Hi', 'Ali');
greet('Good morning', 'John');
greet('Good night', 'Alex');

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

sum(3, 5);
sum(4, 7);
sum(-2, 3);

/*
Write a function named as product which takes 3 number argument and return their product 
product(2, 4, 5)  -> 40
product(3, 7, 6)  --> 126
product(5, 0, 9)  ---> 0
*/


function product(number1, number2, number3) {
    let result = number1 * number2 * number3;
    return result;
}

console.log(product(2, 4, 5));
console.log(product(3, 7, 6));
console.log(product(5, 0, 9));
