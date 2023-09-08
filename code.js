/* ---------------------------------------- */
// esercizio 1 - Get ascii value of character
/* ---------------------------------------- */
// Get ASCII value of a character.
// For the ASCII table you can refer to http://www.asciitable.com/

function getASCII(c){
    return c.charCodeAt(0);
}
    console.log(getASCII('A'));

/* --------------------------------------------------------------- */
// esercizio 2 - Convert boolean values to strings 'Yes' or 'No'.
/* --------------------------------------------------------------- */
// Complete the method that takes a boolean value 
// and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    return (bool === true ? "Yes" : "No");
    // return (bool ? "Yes" : "No");
}

// V2 ---------------------------------------- */
function boolToWord(bool) {

    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}

/* --------------------------------------------------------------- */
// esercizio 3 - Messi goals function
/* --------------------------------------------------------------- */
// Messi is a soccer player with goals in three leagues:
//     LaLiga
//     Copa del Rey
//     Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
     
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }
console.log(goals(5,10,2));

// V2 ---------------------------------------- */
function goals2 (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

    let goalsArray = [laLigaGoals, copaDelReyGoals, championsLeagueGoals];

    // metodo reduce: prende un array e lo riduce ad un solo elemento (somma)
    const sumGoalsArray = goalsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumGoalsArray;
}

/* --------------------------------------------------------------- */
// esercizio 4
/* --------------------------------------------------------------- */
// The cockroach is one of the fastest insects. 
// Write a function which takes its speed in km per hour and returns it in cm per second, 
// rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. 
// The result should be an Integer.

// formula (cm/s = km/h ÷ 0.036)

// Scrivi una funzione che prenda la sua velocità in km orari e la restituisca in cm al secondo, 
// arrotondata per difetto all'intero (= floor).

function cockroachSpeed(s){
    return Math.floor(s / 0.036);
  }

/* --------------------------------------------------------------- */
// esercizio 5
/* --------------------------------------------------------------- */

// Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples:
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    
    let powers = [];
    let exponent = 0;

    for (let index = 0; index <= n; index++) {
        powers.push(2**exponent);
        exponent ++;
    }
    return powers;
}
// console.log(powersOfTwo(5));

// V2 ------------------- utilizzando Math.pow */

function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }

/* --------------------------------------------------------------- */
// esercizio 6
/* --------------------------------------------------------------- */
// Square(n) Sum
// Complete the square sum function so that it squares each number passed 
// into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1²+2²+2²=9

function squareSum(numbers){

    let pow = [];
    
    for (let index = 0; index < numbers.length; index++) {
        const num = numbers[index];
        let square = num ** 2;
        pow.push(square);
    }
    
    const sumOfSquares = pow.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumOfSquares;

    // console.log(pow);

}

// console.log(squareSum([1,2,2]));

/* --------------------------------------------------------------- */
// esercizio 7
/* --------------------------------------------------------------- */
// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?
// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {  
    if (num > 0) {
        return num * (-1);
    } else {
        return num
    }
}
  
// V2 ------------------- operatore ternario */
function makeNegative2(num){
    return num > 0 ? num * (-1) : num;
}

// se hai 7 e vuoi arrivare a -7 devi sottrarre 7 e poi altri 7 (-14)
// 7 - (7*2) ---------------------- V1
// 7 * (-1) (inverso) ------------- V2

/* --------------------------------------------------------------- */
// esercizio 8 -------da finire
/* --------------------------------------------------------------- */
// Write a function that checks if a given string (case insensitive) is a palindrome. 
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, 
// such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

function isPalindrome(x) {
    
    let p = x.toLowerCase().split('');
    let q = [];
    console.log(p);

    for (let i = p.length-1; i >= 0; i--){
        const element = p[i];
        q.push(element);
    }

    let qString = q.join('').toLowerCase();
    console.log(qString);

    if (qString === x.toLowerCase()) {
        return true
    } else {
        return false
    }
    console.log(q);
}
console.log(isPalindrome('itOpinOnavEvanOnipoti'));

// V2 ---------------------------------- */

// // Implementation
// function isPalindrome(myString) {
//   // transform the input string to lowercase
//   const lowercaseInput = myString.toLowerCase();

//   // to have a similar wording
//   const forward = lowercaseInput;

//   // get the backward version of the lowercase string
//   const backward = lowercaseInput.split("").reverse().join("");

//   // check if the forward string is the same as the backward string
//   return forward === backward;
// }

// Result
// console.log(isPalindrome("Abba")); // true
// console.log(isPalindrome("hello")); // false

// V3 ---------------------------------- */
// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
//   }

/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */

/* GIORNO 2 */

/* --------------------------------------------------------------- */
// esercizio 9
/* --------------------------------------------------------------- */
// All Star Code Challenge #18

// Create a function that accepts a string and a single character, 
// and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, 
// the second argument will be a string of length 1

function strCount(str, letter){  
    let strArray = str.split('');
    return strArray.filter((currentLetter) => currentLetter == letter).length;
  }

// il metodo filter prende un array e toglie gli elementi che non soddisfano
// una condizione data (in questo caso, la condizione è essere uguale a letter)

/* --------------------------------------------------------------- */
// esercizio 10 - Quarter of the year
/* --------------------------------------------------------------- */

// Given a month as an integer from 1 to 12, 
// return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; 
// month 6 (June), is part of the second quarter; 
// and month 11 (November), is part of the fourth quarter.

//
// g f m
// a m g
// l a s
// o n d
// 

const quarterOf = (month) => {
    
    if (month >= 1 && month <= 3) {
        return 1;
    } else if (month >= 4 && month <= 6){
        return 2;
    } else if (month >= 7 && month <= 9){
        return 3
    } else if (month >= 10 && month <= 12){
        return 4
    }
  }

  // V2
  const quarterOf2 = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
  }

//   V3
  const quarterOf3 = (month) => {
    
    if (month === 1 || month === 2 || month === 3) {
        return 1 
    } else if (month === 4 || month === 5 || month === 6){
        return 2
    } else if (month === 7 || month === 8 || month === 9){
        return 3
    } else if (month === 10 || month === 11 || month === 12){
        return 4
    }
  }

//   V4 Operatore Ternario
const quarterOf4 = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  }

/* --------------------------------------------------------------- */
// esercizio 11 - Convert number to reversed array of digits
/* --------------------------------------------------------------- */

// Convert number to reversed array of digits

// Given a random non-negative number, 
// you have to return the digits of this number
// within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let nString = n.toString();
    console.log(nString);

    let nArray = nString.split(''); 
    // .split trasforma la stringa in array dei suoi caratteri
    // 'casa' => ['c','a','s','a']

    let nums = nArray.map(function(str){
        return parseInt(str)
    });

    return nums.reverse();
}
console.log(digitize(35231));

// VERSIONE MODICATA - Reverse di una frase

function palindrome(str){
    let strArray = str.split(' ');
    // 'la casa blu' => ['blu','casa','la']

    let reverseArray = strArray.reverse();
    return reverseArray;

    // slim version:
    // return strArray.reverse();
}
console.log(palindrome('la casa blu'));

/* --------------------------------------------------------------- */
// esercizio 12 - Grade book
/* --------------------------------------------------------------- */
// Complete the function so that it finds the average of the three scores 
// passed to it and returns the letter value associated with that grade.

// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

// Tested values are all between 0 and 100. 
// Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;

    if (average < 60) {
        return 'F'
    } else if (average < 70){
        return 'D'
    } else if (average < 80){
        return 'C'
    } else if (average < 90){
        return 'B'
    } else {
        return 'A'
    }
  }

// V2 - Operatore ternario 

function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
  }


/* --------------------------------------------------------------- */
// esercizio 13 - Summation
/* --------------------------------------------------------------- */

// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
      }
      return sum;
  }

/* --------------------------------------------------------------- */
// esercizio 14 - Remove the minimum
/* --------------------------------------------------------------- */
// Task

// Given an array of integers, remove the smallest value. 
// Do not mutate the original array/list. If there are multiple elements with the same value, 
// remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    let minimumNumber = Math.min(...numbers);
    let arrNumber = [];

    const index = numbers.indexOf(minimumNumber)

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        arrNumber.push(element);
    }

    if(index > -1){
        arrNumber.splice(index,1)
    }
    return arrNumber;
    
  }

  console.log(removeSmallest([2,2,1,2,1]));

// esercizio 666 - Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }
    
    let isPositive = [];
    let isNegative = [];
    let solution = [];

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (element > 0) {
            isPositive.push(element);            
        } else if (element < 0){
            isNegative.push(element);
        } 
    }

    let positiveCount = isPositive.length;
    let negativeSum = isNegative.reduce((acc, curr) => acc + curr, 0);
    
    solution.push(positiveCount);
    solution.push(negativeSum);

    return solution;

    // console.log(isPositive);
    // console.log(isNegative);
  }

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
