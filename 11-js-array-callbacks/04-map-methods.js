const numbers = [ 5, 3, 2, 20 ];

// [ 'odd', 'odd', 'even', 'even']

console.log('\n------iteration of arrays map----------------');


const oddEven = numbers.map((number) => number % 2 === 0 ? 'even' : 'odd')

console.log(oddEven);


console.log('\n------iteration of arrays forEach method----------------');

const arr = [];

numbers.forEach((number) => {
    if (number % 2 === 0){
        arr.push('even');
    }
    else arr.push('odd');
});
console.log(arr);

console.log('\n------iteration of arrays for method----------------');

const result = [];
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) result.push('even');
    else result.push('odd');
}
console.log(result);


const sentences = ['Good morning', 'I like arrays', 'It is Saturday'];
// each sentence's first word -> ['Good', 'I', 'It'];


const firstWord = sentences.map((sentence) => sentence.split(' ')[0])

console.log(firstWord);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

const decimals = salaries.map((salary) => salary.toFixed(2))

console.log(decimals);

