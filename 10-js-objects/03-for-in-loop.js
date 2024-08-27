const car = {
    color: 'Black',
    year: 2024,
    make: 'BMW',
    model: 'X7'
};

console.log(car['color']);
console.log(car['year']);
console.log(car['make']);
console.log(car['model']);

for (const key in car) {
    console.log(car[key]);
}

// for in loop with arrays -> keys are indexes, and values are elements

const names = ['Mariia', 'John', 'Alex'];

for (const key in names) {
    console.log(`The key is "${key}" and the values is "${names[key]}"`);
}

// Log each property value as 'Property key = {key} and the value is {value}'
// Log all the favCities one by on
// Chicago
// Miami
// Berlin


const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco'],
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};



for (const key in person) {
    console.log(`The key is "${key}" and the values is "${person[key]}"`);
}

for(let i = 0; i < person.favCities.length; i++) {
    console.log(person.favCities[i]);
}


