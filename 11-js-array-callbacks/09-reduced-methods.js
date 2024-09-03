console.log('\n---------------TASK01-----------\n');

const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];
// Count evens = 4

const evens = numbers.reduce((acc, curr) => {
    if(curr % 2 === 0) return acc + 1
    return acc
}, 0);

console.log(evens);

console.log('\n---------------TASK02-----------\n');

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

const appleWords = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().includes('apple')) return acc + 1
    return acc
}, 0);
console.log(appleWords);

const iWords = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().includes('i')) return acc + 1
    return acc
}, 0);
console.log(iWords);

const fruitEndWithE = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().endsWith('e')) return acc + 1
    return acc
}, 0);
console.log(fruitEndWithE);

console.log('\n---------------TASK03-----------\n');