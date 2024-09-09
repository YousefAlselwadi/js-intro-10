// TASK: Create a Teacher prototype with fname, lname, age, field properties

// Create 2 Teacher Prototypes methods as a teach and giveHomework with empty bodies

// Cretae 3 Teacher Objects


// Replicate this work with ES6 Classes as well


// Store all the ages in an array ->
// Store all the first names in an array-> 
// find and print the information of the oldest teacher ->

/*
function Teacher (fname, lname, age, hmw) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.hmw = hmw;
}

Teacher.prototype.info = function() {
    console.log(`Teacher info = Fullname ${this.fname} ${this.lname}, Age: ${this.age}, Homework: ${this.hmw}`);
}

const teacher1 = new Teacher('Yousef', 'Alselwadi', 20, 'Math');
const teacher2 = new Teacher('John', 'Doe', 43, 'Science');
const teacher3 = new Teacher('Max', 'Strus', 38, 'Chemistry');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

teacher1.info();
teacher2.info();
teacher3.info();

const teachersfirstName = [teacher1.fname, teacher2.fname, teacher3.fname];
const teacherAge = [teacher1.age, teacher2.age, teacher3.age];

const teachers = [teacher1, teacher2, teacher3];
const oldestTeacher = teachers.reduce((oldest, current) => current.age > oldest.age ? current : oldest);

console.log(teachersfirstName);
console.log(teacherAge);
console.log(oldestTeacher);
*/
class Teacher {
    constructor(fname, lname, age, hmw) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.hmw = hmw;
    }
    info() {
        console.log(`Teacher info = Fullname ${this.fname} ${this.lname}, Age: ${this.age}, Homework: ${this.hmw}`);
    }
}

const teacher1 = new Teacher('Yousef', 'Alselwadi', 20, 'Math');
const teacher2 = new Teacher('John', 'Doe', 43, 'Science');
const teacher3 = new Teacher('Max', 'Strus', 38, 'Biology');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

teacher1.info();
teacher2.info();
teacher3.info();

const teachersfirstName = [teacher1.fname, teacher2.fname, teacher3.fname];
const teacherAge = [teacher1.age, teacher2.age, teacher3.age];

const teachers = [teacher1, teacher2, teacher3];
const oldestTeacher = teachers.reduce((oldest, current) => current.age > oldest.age ? current : oldest);

console.log(teachersfirstName);
console.log(teacherAge);
console.log(oldestTeacher);