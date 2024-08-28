
console.log('\n---------------Array destructuring-----------\n');
// Array destructuring
const arr = [ 'abc', 'xyz', 'hi', 'hello' ];

//let first = arr[0];
//let second = arr[1];
//let third = arr[2];
//let fourth = arr[3];

const [first, second, third, fourth] = arr;

arr[0] = 'ABC';

console.log(first);


console.log('\n---------------Object destructuring-----------\n');

const account = {
    username: 'TechGlobalSchool',
    email: 'tgschool@gmail.com',
    password: 'Test1234'
};

const { username, email, password} = account;

console.log(username);
console.log(email);
console.log(password);