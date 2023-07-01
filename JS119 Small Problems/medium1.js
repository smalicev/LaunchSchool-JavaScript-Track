// rotation p1
/*
console.log(typeof [])
{
  console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
  console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
  console.log(rotateArray(['a']));                    // ["a"]
  console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
  console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
  console.log(rotateArray([]));                       // []
  
  // return `undefined` if the argument is not an array
  console.log(rotateArray());                         // undefined
  console.log(rotateArray(1));                        // undefined
  
  
  // the input array is not mutated
  let array = [1, 2, 3, 4];
  rotateArray(array);                    // [2, 3, 4, 1]
  array;                                 // [1, 2, 3, 4]
  

  function rotateArray(array) {
    if (Array.isArray(array) === false) {
      return undefined;
    }
    let rotatedArray = JSON.parse(JSON.stringify(array));
    let firstElement = array[0];
    rotatedArray.push(firstElement);
    rotatedArray.shift();

    return rotatedArray;
  }


}

//rotation pt 2


{
  

/* PEDAC

Question:
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you want 
to rotate to the end and shift the remaining digits to the left.

In my own words:
Given a number and an index value, create a function that will switch the position of
a digit in the number using the index value as an index for the number.
The convention of the switch is that the number will be at the rightmost position, 
and the index starts at 1, increasing leftwards.

Example cases given above.
Input is assumed to always be a number and a number. Guard clauses checking that
both are numbers could be used but for now it will be asumed.

Output will be a number.


Data Structures:
Numbers, possibly arrays, possibly strings.

Algorithm:

Method 1:
Change the data structure to one i'm familiar with.
- Convert number to string, string to array, manipulate as needed:
  - create function scoped variable for the 'new' number
  - create function scoped variable for the index value number (dont have to, just because)
  - convert the 'new' number variable into a string, then split the string into an array of strings
  - with this array, push the value of the number located at the index value provided (counting from the right,
    beginning at 1)
  - remove the element located at the index value provided adjusted by plus one.
  - join the array and convert the string to a number
  - return the 'new' number

  CODE!
*/

/*
  function rotateRightmostDigits(number, indexNum) {
    let numberString = number.toString();
    let numberArray = numberString.split('');

    let totalIndex = numberString.length;
    let convIndex = (totalIndex - indexNum);

    numberArray.push(numberArray[convIndex])
    numberArray.splice(convIndex,1);

    let finalNumber = Number(numberArray.join(''));

    return finalNumber;

  }


  console.log(rotateRightmostDigits(735291, 1));      // 735291
  console.log(rotateRightmostDigits(735291, 2));      // 735219
  console.log( rotateRightmostDigits(735291, 3));      // 735912
  console.log(rotateRightmostDigits(735291, 6));      // 352917
}


{

  maxRotation(735291);          // 321579
  maxRotation(3);               // 3
  maxRotation(35);              // 53
  maxRotation(105);             // 15 -- the leading zero gets dropped
  maxRotation(8703529146);      // 7321609845

}

// word to digit

{

  wordToDigit('Please call me at five five five one two three four. Thanks.');
  // "Please call me at 5 5 5 1 2 3 4. Thanks."

  function wordToDigit(string) {

    let numberObj = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    } 

    let stringArray = string.split('');

    

    return string
  }

}
*/

//fibonacci nubmer location by length
/*
{


  console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
  console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
  console.log(findFibonacciIndexByLength(10n) === 45n);
  console.log(findFibonacciIndexByLength(16n) === 74n);
  console.log(findFibonacciIndexByLength(10000n) === 47847n);

  function findFibonacciIndexByLength(bigInt) {
    let numDigits = bigInt;
    let x = 1n;
    let y = 0n;
    let i;
    let result = 0n;

    for (i = 1n; result.toString().length < numDigits; i += 1n) {
      result = x + y;
      y = x;
      x = result;
    }

    return i;
  }

}

*/


//Fibonacci 2 recursion
/*
{

  console.log(fibonacci(1));       // 1
  console.log(fibonacci(2));       // 1
  console.log(fibonacci(3));       // 2
  console.log(fibonacci(4));       // 3
  console.log(fibonacci(5));       // 5
  fibonacci(12);      // 144
  console.log(fibonacci(20));      // 6765

  function fibonacci(num) {
    if (num === 0){
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      return (fibonacci(num - 1)) + (fibonacci(num - 2));
    }
  }



}
*/
// fib usign loops

{


  console.log(fibonacci(20));       // 6765
  console.log(fibonacci(50));       // 12586269025
  console.log(fibonacci(75));       // 2111485077978050
  
  function fibonacci(num) {
    let x = 1;
    let y = 0;
    let i;
    let result = 0;  

    for (i = 1; i < num; i += 1) {
      result = x + y;
      y = x;
      x = result;
    }

  return result;
  }
  

}


// fib memoization

{

  console.log(fibonacci(1));       // 1
  console.log(fibonacci(2));       // 1
  console.log(fibonacci(3));       // 2
  console.log(fibonacci(4));       // 3
  console.log(fibonacci(5));       // 5
  console.log(fibonacci(20));      // 6765

  function lookUpOrCalc(funct) {
    if ()

  }

  function fibonacci(num) {
    if (num === 0){
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      return (fibonacci(num - 1)) + (fibonacci(num - 2));
    }
  }



}