/* class Author {
    constructor (firstName, lastName, country, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books;
    }
 getFullName() {
    return `${this.firstName} ${this.lastName}`
}

 getBooks() {
    return this.books;

}
}
 
class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of swords', 'Epic Fantasy', 973);


const author = new Author('George R. R.', 'Martin', 'USA', [book1, book2, book3]);

console.log(author.getFullName());
author.getBooks().forEach(book => console.log(book));

*/

function Author(firstName, lastName, country, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books;
    }

    Author.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
    
     Author.prototype.getBooks = function() {
        return this.books;
    
    }
 
function Book (title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of swords', 'Epic Fantasy', 973);


const author = new Author('George R. R.', 'Martin', 'USA', [book1, book2, book3]);

console.log(author.getFullName());
author.getBooks().forEach(book => console.log(book));