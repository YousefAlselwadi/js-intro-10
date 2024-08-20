const numbers = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];


// We can check if the array contains some specific elements
console.log(numbers.includes(5)); // true
console.log(numbers.includes(77)); // true
console.log(numbers.includes(20)); // false

// indexOf() vs lastIndexOf()
console.log(numbers.indexOf(5)); // 0
console.log(numbers.lastIndexOf(5)); // 8

console.log(numbers.indexOf(10)); // 1
console.log(numbers.lastIndexOf(10)); // 3

console.log(numbers.indexOf(25)); // 4
console.log(numbers.lastIndexOf(25)); // 4

console.log(numbers.indexOf(3)); // -1
console.log(numbers.lastIndexOf(3)); // -1

// How to check if array contains an element without includes() method 
const cities = [ 'Chicago', 'Berlin', 'Rome', 'Brugge'];

console.log(cities.includes('Berlin')); // true
console.log(cities.indexOf('Berlin') !== -1); // true

console.log(cities.includes('Berlin', 3)); // false

// Check the number array if it contains an element in the second half of the array
const arr = [10, 20, 30, 40, 25, 100, 5, 10, 20, 90];

arr.includes(30) // true
arr.includes(30, arr.length / 2); // false

