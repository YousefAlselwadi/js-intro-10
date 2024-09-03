function printName() {
    console.log(`The fullname is ${this.fname} ${this.lname}!`);
}

printName(); 

const student = {
    fname: 'Alex',
    lname: 'Smith',
};

const instructor = {
    fname: 'John',
    lname: 'Smith'
};

printName.call(student);
printName.apply(student);

printName.call(instructor);
printName.apply(instructor);





function sum(num1, num2) {
    console.log(`${this.fullname} did the sum = ${num1 + num2}`);
}

sum(3, 5);

const student1 = {
    fullname: 'Mark Steve'
};

const student2 = {
    fullname: 'Morgan J.'
}

sum.call(student1, 5, 10);
sum.apply(student1, [ 5, 10 ]);