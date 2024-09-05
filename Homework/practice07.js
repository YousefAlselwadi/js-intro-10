console.log('\n---------------TASK01-----------\n');

/*
You are given a JS Array below:
Count how many users are older than 30    -> 2
Count how many users live in Chicago      -> 2
Count how many users live in IL      -> 3
Count how many users’ emails has Gmail domain   -> 2
Find and store all the users name younger than 35     -> [ 'Tech', 'Jane', 
'Alex' ]
Find average of ages of all users     -> 28
*/
const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

let countAgeOlder30 = 0;
let countChicago = 0;
let countIllinois = 0;
let countDomain = 0;
const userNameYounger35 = [];
let averageAge = 0;
for(const user of users) {
    if(user.age > 30) countAgeOlder30++;
    if(user.address.city === 'Chicago') countChicago++;
    if(user.address.state === 'IL') countIllinois++;
    if(user.email.includes('Gmail.com')) countDomain++;
    if(user.age < 35) userNameYounger35.push(user.firstName);
       const aver = averAge += user.age / user.length;
}
console.log(countAgeOlder30);
console.log(countChicago);
console.log(countIllinois);
console.log(countDomain);
console.log(userNameYounger35);
console.log(aver);

console.log('\n---------------TASK02-----------\n');
/*
You are given a JS Array below:
Find the most expensive product    -> MacBook Pro 16-inch
Find the least expensive product    -> AirPods Pro
Find the product with the biggest quantity    -> AirPods Pro
Find the product with the smallest quantity   -> MacBook Pro 16-inch
Find all the product names    -> [ 'iPhone 14 Pro', 'MacBook Pro 16-
inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
*/

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
]
let mostExpensive = appleStore[0];
let leastexpensive = appleStore[0];
let largestQuantity = appleStore[0];
let smallestQuantity = appleStore[0];

for(const product of appleStore) {
    if(product.price > mostExpensive.price) {
        mostExpensive = product;
    }
    if (product.price < leastexpensive.price) {
        leastexpensive = product;
    }
    if(product.quantity > largestQuantity.quantity) {
        largestQuantity = product;
    }
    if(product.quantity < smallestQuantity.quantity) {
        smallestQuantity = product;
    }
}
const productNames = appleStore.map((product) => product.productName);

console.log(mostExpensive.productName);
console.log(leastexpensive.productName);
console.log(largestQuantity.productName);
console.log(smallestQuantity.productName);
console.log(productNames);

console.log('\n---------------TASK03-----------\n');
/*
You are given a JS Array below:
Find the cheapest book in the bookstore           -> To Kill a Mockingbird
Find the most expensive book in the bookstore   -> Harry Potter and the Sorcerer's 
Stone
Find all Classic books         -> [ 'The Great Gatsby', 'To Kill a 
Mockingbird' ]
*/
const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];

let cheapestBook = bookstore[0];
let mostExpensiveBook = bookstore[0];

for (let book of bookstore) {
if(book.price < cheapestBook.price) {
    cheapestBook = book;
}
if(book.price > mostExpensiveBook.price) {
    mostExpensiveBook = book;
}
}


console.log(cheapestBook.title);
console.log(mostExpensiveBook.title);


const classicBooks = bookstore.filter(book => book.genre === 'Classic').map(book => book.title);

console.log(classicBooks);

console.log('\n---------------TASK04-----------\n');
/*
You are given a JS Array below:
Calculate the total price of products in the cart     -> 2444
Find the brands of all the products in the cart   -> [ 'Dell', 'Apple', 'Sony' ]
Find all the items in the cart with their quantity  -> [ 'Laptop, 1', 'Smartphone 2', 
'Headphones, 3' ]
*/
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

let totalPrice = 0;
let brands = [];
let itemsWithQuantity = [];

for(const item of shoppingCart.items) {
    totalPrice += item.price * item.quantity;
    brands.push(item.specifications.brand);
    itemsWithQuantity.push(`${item.productName}, ${item.quantity}`);

}

console.log(totalPrice); // 2444
console.log(brands); // [ 'Dell', 'Apple', 'Sony' ]
console.log(itemsWithQuantity); // [ 'Laptop, 1', 'Smartphone, 2', 'Headphones, 3' ]


