const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log('\n----------TASK1----------\n');
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let sum = 0;
let index = 0

for(const number of numbers) {
    if(index % 2 === 0) {
        sum += number 
    } index++
}

console.log(sum);


prod = 1;
index = 0;

for(const number of numbers) {
    if(index % 2 !== 0)
        prod *= number
    index++
}

console.log(prod);