const names = [ 'James', 'John', 'Alex', 'Mariia' ];

console.log('\n------------literation of arrays with for..of loop------------\n');
for(const name of names) {
    console.log(name);
}


console.log('\n------------literation of arrays with for loop------------\n');

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('\n------iteration of arrays forEach method----------------');

names.forEach((x) => console.log(x));


// print each name uppercased


names.forEach((name) => console.log(name.toUpperCase()));

//print each names first letter and last letter together Js, Jn, Ax, Ma

names.forEach((x) => console.log(x[0] + x.slice(-1)));

// print the names that has length equals 4 letter
// John
// Alex

names.forEach((name) => {
if(name.length === 4) console.log(name);
});

// store the length of each name in a different array 
// [ 'James', 'John', 'Alex', 'Mariia' ] -> [ 5, 4, 4, 6]

const lengthOfEachName = [];
 
names.forEach((name) => lengthOfEachName.push(name.length));

console.log(lengthOfEachName);