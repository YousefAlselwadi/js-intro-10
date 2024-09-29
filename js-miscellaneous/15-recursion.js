/*
Write a function that takes a number and returns 
the sum of the numbers starting from one to given numbers

sum(5) -> 15
sum(3) -> 6
*/

function sum(num) {
    let result = 0;
    for(let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(sum(5));
console.log(sum(3));

// Revursive function
function sumRecursive(num) {
    if(num === 0) return 0;
    return num + sumRecursive(num - 1);
}

console.log(sumRecursive(3));
console.log(sumRecursive(6));