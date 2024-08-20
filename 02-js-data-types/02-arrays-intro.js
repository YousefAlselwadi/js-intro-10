/*
    'Toyota', 'Tesla', 'BMW', 'Honda'
    0,5,25
    */
   let favNumber = 7; 
   let firstKidName = 'Alex';

   let cars = [ 'Toyota', 'Tesla', 'Honda', 'BMW' ];
   let numbers = [ 7, 6, 5, 25, 100 ];

   console.log(cars); //'Toyota', 'Tesla', 'Honda', 'BMW'
   console.log(numbers); // 7, 6, 5, 25

   // getting a particular element from an array
 // index of the elements in an array always starts with zero 
 console.log(cars[2]); // Honda

 console.log(numbers [1]); // 0

 // updating the existing elements with a new values
 cars[0] = 'GMC';

 console.log(cars); // 'GMC', 'Tesla', 'Honda', 'BMW'

 cars[3]; // 'BMW'

 let myFavCar = cars[3];

 // getting the sizes of arrays
 // length is an array property which returns back the total number of elements in the array
console.log(cars.length); // 4
console.log(numbers.length);//5

const students = [ 'Alex', 'John', 'Jessie', 'Mariia' ];

console.log(students [-1]);
console.log([4]);





// creating an array with the constructore



console.log(typeof array); // object
console.log(typeof array2); // object
console.log(typeof cars); // object
console.log(typeof numbers); // object


// Accessing the first and last element in the array dynamically 
const nums = [ 10, 20, 30, 40, ];

let first = nums [0]; //
let last = nums[ nums.length - 1 ];

console.log(first);
console.log(last);


