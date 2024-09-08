const arr = [ 'Remote', 'Laptop', 'Computer', 'Phone' ];

const [ remote, , , phone ] = arr;

console.log(phone);

const product = {
    name: 'iphone 16 Pro Max',
    price: 1099,
    color: 'Black',
    quanity: 5
};


const { price, quanity } = product;

console.log(`Total = $${ price * quanity }`);