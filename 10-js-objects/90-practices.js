console.log('\n---------------TASK01-----------\n');
/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching movies' ],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);


const allScores = Object.values(student.exam_scores)

let sum = 0;

for(const score of allScores) {
    sum += score
}

console.log(sum / allScores.length);


console.log('\n---------------TASK02-----------\n');


/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/

const books = [
    {
      name: "Amok",
      author: {
        fname: "Stefan",
        lname: "Zweig",
      },
      genre: "Novella",
    },
    {
      name: "My Name Is Red",
      author: {
        fname: "Orhan",
        lname: "Pamuk",
      },
      genre: "Historical Novel",
    },
    {
      name: "1984",
      author: {
        fname: "George",
        lname: "Orwell",
      },
      genre: "Dystopian Literature",
    },
  ];
  


  let count = 0;

  for (const book of books) {
    if(book.author.fname.toLowerCase().includes('a')) 
        count++;
  }

  console.log(count);

  // Get all the names of the books in array -> [ 'Amok', 'My Name Is Red', '1984' ]

  const bookNames = [];

for (const book of books) {
    bookNames.push(book.name);
}

console.log(bookNames);

