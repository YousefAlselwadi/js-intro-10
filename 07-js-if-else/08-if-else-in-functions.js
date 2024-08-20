



function startE(name) {
    if (name[0] === 'E' || name[0] === 'e') {
        return true;
    }

    return false;
}

console.log(startE('Emad'));
console.log(startE('ahmed'));
console.log(startE('emily'));
console.log(startE(''));

/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisible5(number) {
    if (number % 5 === 0) {
        return true;
    }
    return false;
}
console.log(divisible5(7)); // false
console.log(divisible5(0)); // true
console.log(divisible5(10));// true
console.log(divisible5(99)); // false

/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar(number) {
    if (number % 5 === 0 && number % 7 === 0) {
        return 'foobar';
    }
    else if (number % 7 === 0) {
        return 'bar';
    }
    else if (number % 5 === 0) {
        return 'foo';
    }
    return number;

}
console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));
console.log(fooBar(70));

// different way to solve

function fooBar(number) {
    if (number % 5 === 0) {
        if (number % 7 === 0) return 'foobar';
        return 'foo';
    }
    else if (number % 7 === 0) return 'bar';
    return number;
}


/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

console.log('\n---------------My way-----------\n');
function getGrade(score) {
    if(score >= 90 && score <= 100) {
        return 'A';
    }
    else if (score >= 80 && score <= 89) {
        return 'B';
    }
    else if (score >= 70 && score <= 79 ) {
        return 'C';
    }
    else if (score >= 60 && score <= 69) {
        return 'D';
    }
    return 'F';
}


console.log('\n---------------good way-----------\n');
function getGrade(score) {
    if(score >= 90 && score <= 100) return 'A';
    else if (score >= 80 && score <= 89) return 'B';
    else if (score >= 70 && score <= 79 ) return 'C';
    else if (score >= 60 && score <= 69) return 'D';
    return 'F';
}


console.log('\n---------------best way-----------\n');

function getGrade(score) {
    if(score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    return 'F';
}

console.log(getGrade(90)); // A
console.log(getGrade(89)); // B
console.log(getGrade(80)); // B
console.log(getGrade(79)); // C
console.log(getGrade(70)); // C
console.log(getGrade(69)); // D
console.log(getGrade(60)); // D
console.log(getGrade(59)); // F
console.log(getGrade(95)); // A
console.log(getGrade(83)); // B
console.log(getGrade(23)); // F
console.log(getGrade(67)); // D

