const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

console.log('\n-------------TASK01-------------\n');

// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4


let sum = 0

for(const number of numbers) {
    sum += number;
}
console.log(sum);
console.log(sum / numbers.length);


console.log('\n-------------TASK02-------------\n');

let prod = 1;

for(let i = 3; i < numbers.length; i++) {
    prod *= numbers[i];
} 
console.log(prod); // 84


prod = 1;

for(const number of numbers.slice(3)) {
    prod *= number;
}

console.log(prod); // 84