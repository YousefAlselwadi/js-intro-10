class Customer {
    constructor(name, age, membershipType, membershipCost) {
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }
    getDetails() {
        return (`${this.name} is ${this.age} years old and has a ${this.membershipType} membership with ${this.membershipCost}`);
    }
    upgradeMembership() {
        this.membershipType = 'Premium';
        this.membershipCost *= 1.2;
    }
}


class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost)
    }
    applyDisscount() {
        this.membershipCost *= 0.9
    }
}

class BussinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost)
        this.duration = duration;
    }
    extendContract() {
        this.duration += 1;
        this.membershipCost *= 0.85;
    }
}

const Customer1 = new Customer('Jane Smith', 35, 'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
const bussinessCustomer = new BussinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

Customer1.upgradeMembership();
vipCustomer.applyDisscount();
bussinessCustomer.extendContract();


console.log(Customer1.getDetails());
console.log(vipCustomer.getDetails());
console.log(bussinessCustomer.getDetails());
