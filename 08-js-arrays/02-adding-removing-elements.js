const names = [ 'Alex', 'John' ];

console.log(names); // [ 'Alex', 'John' ]

// Adding elements to the end of array
names.push('Mariia');

console.log(names); // [ 'Alex', 'John', 'Mariia' ]


names.push('Jibril', 'Yousef', 'Kareem');

console.log(names); // [ 'Alex', 'John', 'Mariia', 'Jibril', 'Yousef', 'Kareem']

//Removing elements from the end of the array
names.pop(); // 'Kareem'
names.pop(); // 'Yousef'
names.pop(); // 'Jibril'

console.log(names); // [ 'Alex', 'John', 'Mariia' ]


const numbers = [ 10, 20, 30 ];

//Adding elements to the beginning of the array
numbers.unshift(90); //

console.log(numbers); //[  90, 10, 20, 30 ]

numbers.unshift(15, 23); // 6

console.log(numbers); // [ 15, 23, 90, 10, 20, 30 ]

// Removing elements from the beginngig of the array
numbers.shift(); // 15
numbers.shift(); // 23
numbers.shift(); // 90

console.log(numbers); // [ 10, 20, 30 ]

numbers.shift(); // 
numbers.shift(); //
numbers.shift(); //

console.log(numbers);

