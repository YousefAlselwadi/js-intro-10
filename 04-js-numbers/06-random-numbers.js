
// get a random number at 0 and 10 -> inclusive and 10 exclusive

let ranNum0_9 = Math.random() * 10;

console.log(ranNum0_9); // 
console.log(Math.floor(ranNum0_9)); // 0, 1, 2, 3, 4, 5, ,6 ,7 , 8, 9

// get a random number at 0 and 10 -> both inclusive
let ranNum1_10 = Math.random() * 10;

console.log(Math.ceil(ranNum1_10)); // 0 and 10 both inclusive


// get a random number between 0 and 25 -> both included
/*
RULE: you can use below steps only when your range starts with ZERO
1. Generate a random number between 0 and 1
2. multiply this number with the count of desired numbers (how many numbers you can get in your range)
    largeNumber - smallNumber + 1 -> 25 - 0 + 1  =-> 26
    3. floor the result
*/

let ranNum0_25 = Math.random() * 26;

console.log(Math.floor(ranNum0_25));



// Get a random number between 13 and 27 -> both included
/*
RULE: you can use below steps only when your range doesnt starts with ZERO
1. Generate a random number between 0 and 1
2. multiply this number with the count of desired numbers (how many numbers you can get in your range)
    largeNumber - smallNumber + 1 -> 27 - 13 + 1  =-> 15
3.floor the result
4. Add smallerNumber to the flooed result

Math.floor(Math.random()) * (max - min + 1)) +  min
*/

let ranNum13_27 = (Math.random() * 15) + 13;

console.log(Math.floor(ranNum13_27));

// Get a random number between 14 and 19 -> 14 inclusive, 19 exclusive

let ranNum14_19 = (Math.random() * 5) + 14;

console.log(Math.floor(ranNum14_19));



/*
formula
*/
//Math.floor(Math.random()) * range + start

console.log(Math.floor(Math.random() * 50) + 51);

console.log(Math.floor(Math.random() * 16) + 111);














//////////////////////






