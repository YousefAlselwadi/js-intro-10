const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

console.log('\n-------------TASK01-----------\n');

// Count how many positive numbers you have in the array -> 4
let positive = 0

for(const number of numbers) {
    if(number > 0) positive++;
}

console.log(positive);

console.log('\n-------------TASK02-------------\n');

let negative = 0

for(const number of numbers) {
    if(number < 0) negative++;
}

console.log(negative);

console.log('\n-------------TASK03-------------\n');

let countEven = 0;

for(const number of numbers) {
    if(number % 2 === 0) countEven++;
}

console.log(countEven);

console.log('\n-------------TASK04-------------\n');

let countOddPos = 0;

for(const n of numbers) {
    if(n % 2 !== 0 && n > 0) countOddPos++;
}

console.log(countOddPos);



