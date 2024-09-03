console.log('\n---------------TASK01-----------\n');

const numbers = [0, 10, -4, 2, -3];

let firstPos= numbers.find((number) => number > 0);

let firstPosIndex = numbers.findIndex((number) => number > 0);

console.log(firstPos); // 10
console.log(firstPosIndex); // 1

console.log('\n---------------TASK02-----------\n');

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

let firstEleWith4Letters = cities.find((city) => city.length === 4);
console.log(firstEleWith4Letters);

let lastCityHas6Letters = cities.findLast((city) => city.length === 6)
console.log(lastCityHas6Letters);

let citieIndexOfLa = cities.findIndex((city) => city === 'LA')
console.log(citieIndexOfLa);

let firstCityWithI = cities.find((city) => city.toLowerCase().includes('i'));
console.log(firstCityWithI);

let lastWordWith4Letters = cities.findLast((city) => city.length === 4);
console.log(lastWordWith4Letters);


cities.find((city) => city.length === 10);
cities.findLast((city) => city.length === 10);
cities.findIndex((city) => city.length === 10);
cities.findLastIndex((city) => city.length === 10);