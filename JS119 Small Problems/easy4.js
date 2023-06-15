
//Searching 101

{

  let num1 = 25;
  let num2 = 24;
  let num3 = 23;
  let num4 = 22;
  let num5 = 21;
  let num6 = 1;

  function searchSix(num1, num2, num3, num4, num5, num6){
    let array = [num1, num2, num3, num4, num5]

    if (array.includes(num6)) {
      console.log(`The number ${num6} appears in ${num1} ${num2} ${num3} ${num4} ${num5}`)
    } else {
      console.log(`The number ${num6} does not appear in ${num1} ${num2} ${num3} ${num4} ${num5}`)
    }
  }

  searchSix(num1,num2,num3,num4,num5,num6);

}

// palindromic strings 1 

{
  function isPalindrome(string) {
    let array = string.split('')
    let reverseArray = array.toReversed();

    if (reverseArray === array) {
      return true
    } else{
      return false
    }
  }

  console.log(isPalindrome('madam'));               // true
  console.log(isPalindrome('Madam'));               // false (case matters)
  console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
  console.log(isPalindrome('356653'));              // true

}


// palindromic strings 2

{
  function isPalindrome(string) {
    let certainString = String(string);

    let array = certainString.split('')
    let reverseArray = array.reverse().join('');

    if (reverseArray == string) {
      return true
    } else{
      return false
    }
  }
  console.log(isPalindrome(34543));        // true
  console.log(isPalindrome(123210));       // false
  console.log(isPalindrome(22));           // true
  console.log(isPalindrome(5));            // true
  

}


// running totals

{


  function runningTotal(array) {
    let total = 0

    let newArray = [];

    for (i = 0; i < array.length; i += 1) {
      newArray[i] = array[i] + total;
      total += array[i];
    }

    return newArray
  }
  console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
  console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
  console.log(runningTotal([3]));                    // [3]
  console.log(runningTotal([]));                     // []

}


// Letter Counter

{
  function wordSizes(string) {
    let lettersNumbersOnly = string.replace(/[^\w\s]/g, '');
    let array = lettersNumbersOnly.split(' ')[0] === '' ? {} : lettersNumbersOnly.split(' ');
    let counterObject = {};

    for (i = 0; i < array.length; i += 1) {
      numberKey = array[i].length;
      counterObject[numberKey] = (counterObject[numberKey] === undefined? 0 : counterObject[numberKey]) + 1
    }

    return counterObject;
  }

  console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
  console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
  console.log(wordSizes(''));                                            // {}
  console.log(wordSizes(' '));                                           // {}
}

// letter swap


{

  function swap(string) {
    let array = string.split(' ')

    for (i = 0; i < array.length; i += 1) {
      array[i] = array[i].split('').reverse().join('');
    }

    let finalArray = array.join(' ')

    return finalArray;
  }

  console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
  console.log(swap('Abcde'));                          // "ebcdA"
  console.log(swap('a'));                              // "a"

}

// unconventional string to number

{
  function stringToSignedInteger(string){
    return (0 + +string)

  }

  console.log(stringToSignedInteger("4321") === 4321); // logs true
  console.log(stringToSignedInteger("-570") === -570); // logs true
  console.log(stringToSignedInteger("+100") === 100); // logs true
}


// unconventional number to a string

{
  function integerToString(number) {

    let len = Math.ceil(Math.log10(number + 1));

    for (j = 0; j < len; j += 1){
      array[0] = Math.floor(array[0]/(1+ (len - j)))
    }

    const DIGITS = {
      0: '0',
      1: '1',
      2: '2',
      3: '4',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
    }

    let array = number.split('')

    for (i = 0; i < array.length; i += 1) {
      array[i] = DIGITS[array[i]]
    }

    return array.join('');

  }

  console.log(integerToString(4321));        // "4321"
  console.log(integerToString(0));           // "0"
  console.log(integerToString(5000));        // "5000"
  console.log(integerToString(1234567890));  // "1234567890"

}