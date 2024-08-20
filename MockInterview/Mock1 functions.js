/*
Area of a rectangle 
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y 
 
Examples: 
rectangleArea(5, 4)   -> 20 
rectangleArea(3, 7)   -> 21 
rectangleArea(6, 10)   -> 60 
*/

function rectangleArea(x, y) {
    return x * y;

}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(10, 7));
console.log(rectangleArea(6, 10));

/*
Perimeter of a rectangle. 
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Perimeter = 2 * (x + y) 
 
Examples: 
rectanglePerimeter(5, 4)   -> 18 
rectanglePerimeter(3, 7)   -> 20 
rectanglePerimeter(6, 10)   -> 32 
*/

function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}
console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));

/*
Area of a square 
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x 
 
Examples: 
squareArea(5)   -> 25 
squareArea(3)   -> 9 
squareArea(6)   -> 36
*/

function squareArea(x) {
    return x * x;
}

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

/*
Perimeter of a square. 
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula: Perimeter = 4 * x 
 
Examples: 
squarePerimeter(5)   -> 20 
squarePerimeter(3)   -> 12 
squarePerimeter(6)   -> 24
*/

function squarePerimeter(x) {
    return 4 * x;
}
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));

/*
Double The Word 
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal" 
*/

function doubleWord(word) {
    return word + word;
}
console.log(doubleWord("Tech"));
console.log(doubleWord("Global"));

/*
First Character 
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
firstCharacter("Tech")    -> "T" 
firstCharacter("Global")   -> "G" 
*/

function firstCharacter(str) {
    return str[0]
}

console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));

/*
First Two Characters 
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
 
Examples: 
firstTwoCharacters("Tech")    -> "Te" 
firstTwoCharacters("Global")     -> "Gl" 
firstTwoCharacters("")      -> "" 
firstTwoCharacters(" ")      -> " " 
firstTwoCharacters("1")     -> "1"
*/

function firstTwoCharacters(word) {
    return word.substring(0, 2);
}

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters("1"));

/*
Last Character 
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
lastCharacter("Tech")    -> "h" 
lastCharacter("Global")    -> "l" 
lastCharacter(" ")    -> " " 
lastCharacter("123")     -> "3"
*/

function lastCharacter(str) {
    return str.slice(-1);
}
console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter(" "));
console.log(lastCharacter("123"));

/*
Last Two Characters 
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1
*/

function lastTwoCharacters(word) {
    return word.slice(-2);
}
console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("123"));

/*
First and Last Characters 
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
firstLast("Tech")    -> "Th" 
firstLast("TechGlobal")     -> "Tl" 
firstLast("")      -> "" 
firstLast(" ")      -> " " 
firstLast("1")       -> "1" 
firstLast("abcde")     -> ae
*/

function firstLast(word) {
    if (word.length < 2) {
        return word;
    }
    else return word[0] + word.slice(- 1);
}
console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast(" "));
console.log(firstLast("1"));
console.log(firstLast("abcde"));

/*
Has Five 
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked. 
 
Examples: 
hasFive("Tech")   -> false 
hasFive("Global")   -> true 
hasFive("")    -> false 
hasFive("12345")   -> true 
hasFive("hello")   -> true
*/

function hasFive(word) {
    return word.length >= 5;
}
console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));
console.log(hasFive("12345"));
console.log(hasFive("hello"));

/*
Middle 
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23"
*/

function middle(word) {
    if (word % 2 !== 0) {
        return word.substring;
    }
    else if (word % 2 === 0) {
        return
    }
}

/*
Longer String 
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked. 
NOTE: If both of the words have the same length, then return the first string. 
 
Examples: 
longer("Tech", "Global")  -> "Global" 
longer("Hello", "Hi")    -> "Hello" 
longer("Hello", "World")  -> "Hello"
*/

function longer(word1, word2) {
    if (word1.length >= word2.length) {
        return word1;
    }
    else if (word1.length < word2.length) {
        return word2;
    }
}
console.log(longer("Tech", "Global"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "World"));

/*
Shorter String 
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked. 
NOTE: if both of the words have the same length, then return the second String. 
 
Examples: 
shorter("Tech", "Global")  -> "Tech" 
shorter("Hello", "Hi")    -> "Hi" 
shorter("Hello", "World")  -> "World"
*/

function shorter(word1, word2) {
    if (word1.length >= word2.length) {
        return word2;
    }
    else if (word1.length < word2.length) {
        return word1;
    }
}
console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));

/*
Concat Two String 
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234"
*/
function concat(word1, word2) {
    return `"${word1}${word2}"`;
}
console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));


function firstLast(word) {
    if (word > 2) {
      return word;
    }
    else return word[0] + word.slice(-1);
    }
  
  console.log(firstLast("Tech"));
  console.log(firstLast("TechGlobal"));
  console.log(firstLast(""));
  console.log(firstLast(" "));
  console.log(firstLast("1"));
  console.log(firstLast("abcde"));


  function hasFive(word) {
    return word.length >= 5;
  }
  console.log(hasFive("Tech"));
  console.log(hasFive("Global"))