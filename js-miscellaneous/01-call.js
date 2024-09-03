/*
this keyword
*/

const person = {
    fname: 'John',
    lname: 'Doe',
    fullName: function() {
        console.log(`The fullname is ${this.fname} ${this.lname}.`);
    }
}

person.fullName();

const student = {
    fname: 'Alex',
    lname: 'Smith'
}
// Function borrowing from one object to another
person.fullName.call(student);

// Borrowing a function for an object 
function hi(str) {
    console.log(`Hi, ${str}!`);
}

const instructor = {
    name: 'John Doe'
}

hi('Data');

hi.call(instructor, instructor.name)