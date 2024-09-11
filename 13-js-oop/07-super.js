/*

*/

class Customer {
    constructor(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
}

class PrimeCustomer extends Customer {
    constructor(fname, lname, id, primeCode) {
        super(fname, lname, id, primeCode);
        this.primeCode = primeCode;
    }
}

const customer1 = new Customer('John', 'Doe', 123);
const primeCustomer1 = new PrimeCustomer('Alex', 'Smith', 789, 'ABC');

console.log(customer1);
console.log(primeCustomer1);
