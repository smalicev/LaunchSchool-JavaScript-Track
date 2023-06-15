// repeater 2

{

  function doubleConsonants(string) {

    let array = string.split('');

    for (i = 0; i < array.length; i += 1) {
      if (/[aeiou! -]/gi.test(array[i]) === true){
        array[i] = array[i];
      } else {
        array[i] = array[i] + array[i];
      }
    }

    return array.join('');
  }
  console.log(doubleConsonants('String'));          // "SSttrrinngg"
  console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
  console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
  console.log(doubleConsonants(''));                // ""

}

// reverse number

{
  function reverseNumber(number){
    return parseInt(number.toString().split('').reverse().join(''),10)
  }

  console.log(reverseNumber(12345));    // 54321
  console.log(reverseNumber(456));      // 654
  console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
  console.log(reverseNumber(1));        // 1
  console.log(reverseNumber(12213));    // 31221
}


// counting up

{
  function sequence(number) {

    let array = [];

    for (i = 1; i <= number; i += 1) {
      array.push(i)
    }

    return array
  }

  console.log(sequence(5));    // [1, 2, 3, 4, 5]
  console.log(sequence(1));    // [1]
  console.log(sequence(3));    // [1, 2, 3]

}


// name swapping

{
  function swapName(string) {
    let array = string.split(' ')
    let nameSwapped = array.reverse().join(', ')

    return nameSwapped
  }


  console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
}


// sequence count

{

  function sequence(count,multiple) {

    let array = [];

    for (i= 1; i <= count; i += 1) {
      array.push(i*multiple)
    }
    return array;

  }
  console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
  console.log(sequence(4, -7));         // [-7, -14, -21, -28]
  console.log(sequence(3, 0));          // [0, 0, 0]
  console.log(sequence(0, 1000000));    // []


} 


// reverse it

{
  function reverseSentence(string) {
    let array = string.split(' ')
    let sentence = array.reverse().join(' ')

    return sentence
  }

  console.log(reverseSentence(''));                       // ""
  console.log(reverseSentence('Hello World'));            // "World Hello"
  console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
}

// reversed arrays

{

  function reverse(array) {
    let holderArray = []
    let k = 0;

    for (i = 0; i < array.length; i += 1) {
      holderArray[i] = array[i]
    }

    for (j = array.length -1 ; j >= 0; j -= 1){
      array[k] = holderArray[j];
      k += 1;
    }

    return array;

  }

  let list = [1, 2, 3, 4];
  let result = reverse(list);
  console.log(result); // logs [4,3,2,1]
  console.log(list === result); // logs true
}




// matching parentheses


function isBalanced(string) {
  let regexp = /[\(\)]/g
  let array = string.match(regexp);
  console.log(array);
  if (array === []) {
    return true;
  } else{
    for (i = 0; i < array.length; i += 1){

      if (i % 2 === 0) {
        firstParentheses = '('
        secondParentheses = ')'
      } else {
        firstParentheses = ')'
        secondParentheses = '('
      }

      if (array[i] === firstParentheses && array[i+1] === secondParentheses) {
        continue
      } else {
        return false
      }
    }
    return true
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);