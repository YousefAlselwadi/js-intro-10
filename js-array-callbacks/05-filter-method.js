const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

const numbers50AndMore = numbers.filter((number) => number >= 50)

console.log(numbers50AndMore);

const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2


const count = fruits.filter((fruit) => fruit.toLowerCase().includes('apple'));

const count1 = fruits.filter((fruit) => fruit.toLowerCase().includes('a'));

const count2 = fruits.filter((fruit) => fruit.toLowerCase().includes('i'));

console.log(count.length);
console.log(count1.length);
console.log(count2.length);