const user = {
    firstName: 'John',
    lastname: 'Doe',
    age: 25,
    email: 'johndoe@gmail.com',
    phone: '000-000-0000'
};

console.log(user); //
console.log(typeof user); // 'object'

// getting a specific information of the object using dot notation or bracket notation 
console.log(user.firstName); // 'John'
console.log(user.email); // johndoe@gmail.com

// updating the property values using dot notation or bracket notation 
user.firstName = 'Alex'
user['phone'] = '111-1111-1111';

// adding a new property to an object
user.password = 'test1234';

console.log(user);

// removing an existing property from the object

delete user.age;
delete user['lastname'];


