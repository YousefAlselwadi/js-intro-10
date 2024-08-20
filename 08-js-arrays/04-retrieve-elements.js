const objects = [ 'Phone', 'Watch', 'Mouse', 'Laptop' ];

// retrieving elements using indexes 
console.log(objects[0]); // 'Phone'
console.log(objects[1]); // 'Watch'

console.log(objects.at(0)); // 'Phone'
console.log(objects.at(1)); // 'Watch'


// Last element 
console.log(objects[objects.length - 1]); // 'Laptop'
console.log(objects.at(-1)); // 'Laptop'

//

console.log(objects[objects.length - 2]); // 'Mouse'
console.log(objects.at(-2)); // Mouse

