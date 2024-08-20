/*Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 2 -> true 5 -> false 10 -> true
*/

let ranNum = Math.floor(Math.random() * 10) + 1
console.log(ranNum);
console.log(ranNum % 2 === 0);

/*
Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true 2 -> false 5 -> true 10 -> false
*/
let ranNum1 = Math.floor(Math.random() * 10) + 1;
console.log(ranNum1);
console.log(ranNum1 % 2 !== 0);

/*
Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is positive, print true.
Otherwise, print false.
Examples:
-5 -> false -1 -> false 0 -> false 1 -> true 5 -> true
*/

let ranNum2 = Math.floor(Math.random() * 11) - 5;
console.log(ranNum2);
console.log(ranNum2 > 0);

/*
Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true -1 -> true 0 -> false 1 -> false 5 -> false
*/
let ranNum3 = Math.floor(Math.random() * 11) - 5;
console.log(ranNum3);
console.log(ranNum3 < 0);

/*
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false 5 -> true 20 -> true 37 -> false 50 -> true
*/
let ran = Math.floor(Math.random() * 50) + 1;
console.log(ran);
console.log(ran % 5 === 0);

/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false 7 -> true 35 -> true 49 -> true 50 -> false
*/
let ran1 = Math.floor(Math.random() * 50) + 1;
console.log(ran1);
console.log(ran1 % 7 === 0);

/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the sum of the numbers and print it.
Examples: 
3,5 ->8 
7,3 ->10
5,5 ->10
1, 10 -> 11
10, 1 -> 11
*/
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

console.log(randomNum1, randomNum2);

console.log(randomNum1 + randomNum2);

/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the absolute difference of the numbers and print it.
Examples:
3,5 ->2 
7,3 ->4 
5,5 ->0 
1,10 ->9 
10,1 ->9
*/

let randomNum3 = Math.floor(Math.random() * 10) + 1;
let randomNum4 = Math.floor(Math.random() * 10) + 1;

console.log(randomNum3, randomNum4);

console.log(Math.abs(randomNum3 - randomNum4));

/*
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the product of the numbers and print it.
Examples: 
3,5  -> 15
7,3 ->21
5,5 ->25
1, 10   ->10
10, 1   -> 10
*/

let ran3 = Math.floor(Math.random() * 10) + 1;
let ran4 = Math.floor(Math.random() * 10) + 1;

console.log(ran3, ran4);
console.log(ran3 * ran4);

/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the square of the number and print it.
Examples:
1 ->1
2 ->4
5 ->25 
10 -> 100
*/

let ran5 = Math.floor(Math.random() * 10) + 1;

console.log(ran5);
console.log(ran5 ** 2);

/*
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the cube of the number and print it.
Examples:
1 ->1
2 ->8
5 ->125 
10 -> 1000
*/

let ran6 = Math.floor(Math.random() * 10) + 1;
console.log(ran6);
console.log(ran6 ** 3);

/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 ->1.6 
2 ->3.2 
5 ->8
*/

let miles = Math.floor(Math.random() * 10) + 1;

let milesToKilometers = 1.6;

console.log(miles);

console.log(miles * milesToKilometers);

/*
Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 ->2.2 
20 ->44 
75 -> 165 
100 -> 220
*/
let kilograms = Math.floor(Math.random() * 100) + 1;

let kilogramsToPounds = 2.2;

console.log('kilograms is =', kilograms);
console.log('kilograms to pounds is =', kilograms * kilogramsToPounds);

/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). If the numbers are equal, print true.
Otherwise, print false.
Examples:
1,1 -> true
1,2 -> false
2,3 -> false 
2,2 -> true 
3,3 -> false
*/
let ranNum1_1_3 = Math.floor(Math.random() * 3) + 1;
let ranNum2_1_3 = Math.floor(Math.random() * 3) + 1;

console.log(ranNum1_1_3, ranNum2_1_3);
console.log(ranNum1_1_3 === ranNum2_1_3);

/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false 
15 -> false 
16 -> true 
45 -> true 
100 -> true
*/
let ranNum1_100 = Math.floor(Math.random() * 100) + 1;

console.log(ranNum1_100);
console.log(ranNum1_100 >= 16);

/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Find the greatest of the numbers and print it.
Examples: 
3,5 --> 5
7,3 --> 7
5,5 --> 5
1,10 --> 10
10,1 --> 10
*/

let ranNum1_1_10 = Math.floor(Math.random() * 10) + 1;
let ranNum2_1_10 = Math.floor(Math.random() * 10) + 1;

console.log(ranNum1_1_10, ranNum2_1_10);
console.log(Math.max(ranNum1_1_10, ranNum2_1_10));

/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Find the greatest of the numbers and print it.
Examples:
3,5,2 ->5 
7,3,1 ->7 
5,5,5 ->5 
1,10,9 ->10 
10,1,2 ->10
*/

let ranNum3_1_10 = Math.floor(Math.random() * 10) + 1;
let ranNum4_1_10 = Math.floor(Math.random() * 10) + 1;
let ranNum5_1_10 = Math.floor(Math.random() * 10) + 1;

console.log(ranNum3_1_10, ranNum4_1_10, ranNum5_1_10);
console.log(Math.max(ranNum3_1_10, ranNum4_1_10, ranNum5_1_10));

/*
Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Find the smallest of the numbers and print it.
Examples:
3,5 ->3 
7,3 ->3 
5,5 ->5 
1,10 ->1 
10,1 ->1
*/
let ran_num1 = Math.floor(Math.random() * 10) + 1;
let ran_num2 = Math.floor(Math.random() * 10) + 1;

console.log(ran_num1, ran_num2);
console.log(Math.min(ran_num1, ran_num2));

/*
Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Find the smallest of the numbers and print it.
Examples:
3,5,2 ->2 
7,3,1 ->1 
5,5,5 ->5 
1,10,9 ->1 
10,1,2 ->1
*/
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
let random3 = Math.floor(Math.random() * 10) + 1;
console.log(random1, random2, random3);
console.log(Math.min(random1, random2, random3));

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Calculate the average of the numbers and print it.
Examples:
3,5,7 ->5 
7,3,2 ->4 
5,5,5 ->5 
1,10,7 ->6 
10,1,1 ->4
*/

let random4 = Math.floor(Math.random() * 10) + 1;
let random5 = Math.floor(Math.random() * 10) + 1;
let random6 = Math.floor(Math.random() * 10) + 1;

console.log(random4, random5, random6);
console.log((random4 + random5 + random6) / 3);

/*
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
*/
let ranNum22 = Math.floor(Math.random() * 100) + 1;

console.log(ranNum22);

let quarter;
if (ranNum <= 25) {
  console.log('1st quarter');
}
else if (ranNum <= 50) {
  console.log('2nd quarter');
}
else if (ranNum <= 75) {
  console.log('3rd quarter');
}
else console.log('4th quarter');

function concat(word1, word2) {
    return `${word1}${word2}`
  } 
  console.log(concat("Tech", "Global"));
  console.log(concat("Hello", "World"));
  console.log(concat("", "abc"));
  console.log(concat("123", "1234"));

  function middle(word) {
    if (word.length % 2 !== 0) {
      return (word[(word.length -1) /2]);
    }
    else if (word.length % 2 === 0) {

    }
    return (word[word.length / 2 - 1] + word[word.length /2]);
  }
  console.log(middle("Tech"));
  console.log(middle("Global"));
  console.log(middle("abcde"));
  console.log(middle("1"));
  console.log(middle("abc"));
  console.log(middle("1234"));

  console.log("3" * "5" >= 15 && true == 1 && "   " == false && "" === 0)