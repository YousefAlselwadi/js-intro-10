

console.log('\n----------Task01-------------')

let ranNum0_50 = Math.random() * 51

console.log(Math.floor(ranNum0_50));



console.log('\n----------Task02-------------')

let ranNum1 = Math.random() * 10 
let ranNum2 = Math.random() * 10 

let minNum = Math.min(ranNum1, ranNum2); // minimum number
let maxNum = Math.max(ranNum1, ranNum2); // maximum number

let difference = Math.abs(ranNum1, ranNum2); // The difference between both numbers

console.log(`Min Number = ${minNum}`);
console.log(`Max Number = ${maxNum}`);
console.log(`Difference Number = ${difference}`);


console.log('\n----------Task03-------------')


let ranNum50_100 = Math.random() * 101 % 10

console.log(`The random number % 10 = ${ranNum50_100}`)



console.log('\n----------Task04-------------')

let ran1 = Math.ceil(Math.random() * 10);
let ran2 = Math.ceil(Math.random() * 10);
let ran3 = Math.ceil(Math.random() * 10);
let ran4 = Math.ceil(Math.random() * 10);
let ran5 = Math.ceil(Math.random() * 10);
console.log(ran1, ran2, ran3, ran4, ran5);
console.log(5 * ran1 + 4 * ran2 + 3 * ran3 + 2 * ran4 + 1 * ran5);


console.log('\n----------Task05-------------')

let ran01 = Math.ceil(Math.random() * 25);
let ran02 = Math.ceil(Math.random() * 25) + 25;
let ran03 = Math.ceil(Math.random() * 25) + 50;
let ran04 = Math.ceil(Math.random() * 25) + 75;
console.log(`Difference of max and min = {${Math.abs(Math.max(ran01, ran02, ran03, ran04) - Math.min(ran01, ran02, ran03, ran04))}}`);
console.log(`Difference of second and third = {${Math.abs(ran02 - ran03)}}`);
console.log(`Average of all = {${(ran01 + ran02 + ran03 + ran04) / 4}}`);

