function getInfo() {
    console.log(`${this.fullname} is ${this.age} years old.`);
};

getInfo();

const obj = {
    fullname: 'Morgame James',
    age: 30
};

getInfo.call(obj);
getInfo.apply(obj);

const func = getInfo.bind(obj);

func();
