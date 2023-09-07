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

    if (qString === x) {
        return true
    } else {
        return false
    }
    console.log(q);
}
console.log(isPalindrome('portaLAnonnaALBIOPARCOoOoO'));
