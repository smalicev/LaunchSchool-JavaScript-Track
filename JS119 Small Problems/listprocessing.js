// sum of digits

{

  console.log(sum(23));           // 5
  console.log(sum(496));          // 19
  console.log(sum(123456789));    // 45
  

  function sum(number) {
    let numString = number.toString();
    let numArray = numString.split('');

    numArray.forEach((element, idx) => {
      numArray[idx] = Number(element);
    });

    return numArray.reduce((accumulator,currentVal) => {
      return accumulator + currentVal;
    })
  }

}


// alphabetical numbers

{

 console.log( alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
 // [8, 5, 4, 9, 1, 7, 6, 10, 3, 2, 0]

    function alphabeticNumberSort(array) {
      let numObj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
      };


      array.forEach((element, idx) => {
        if (element === idx) {
          array[idx] = numObj[idx]
        };
      });

      array.sort();

      array.forEach((element, idx) => {
        for (const properties in numObj) {
          if (element === numObj[properties]) {
            array[idx] = Number(properties);
          }
        }
      });

      return array;
    }
}

// multiply all pairs


{

  console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

  function multiplyAllPairs(arrayOne, arrayTwo) {
    
    let multiplyArray = arrayOne.map((element, idx) => {
      return arrayOne[idx] * arrayTwo[idx]
    });

    return multiplyArray;
  }


}


// leading substrings


{

  console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
  console.log(leadingSubstrings('a'));        // ["a"]
  console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
  
  function leadingSubstrings(string) {
    let stringArray = string.split('');

    stringArray.forEach((element, idx) => {
      stringArray[idx] = string.substring(0,idx + 1);
    });

    return stringArray;
    

  }

}

// substrings


{
  
  function substrings(string) {
    let stringArray = [];

    for (let i = 0; i < string.length; i += 1) {
      for (let j = i + 1; j <= string.length; j += 1) {
        if ( i === j ){
          continue;
        }
        stringArray.push(string.substring(i,j))
      }
    }
    return stringArray;
  }
  console.log(substrings('abcde'));

}

//palindromic substrings

{

  function substrings(string) {
    let stringArray = [];

    for (let i = 0; i < string.length; i += 1) {
      for (let j = i + 1; j <= string.length; j += 1) {
        if ( i === j ){
          continue;
        }
        stringArray.push(string.substring(i,j))
      }
    }
    return stringArray;
  }

  console.log(palindromes('abcd'));       // []
  console.log(palindromes('madam'));      // [ "madam", "ada" ]

  console.log(palindromes('hello-madam-did-madam-goodbye'));
  // returns
  // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  //   "-madam-", "madam", "ada", "oo"  ]

  console.log(palindromes('knitting cassettes'));
  //   returns
  //   [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


  function palindromes(string) {
    let palindromeArray = [];

    substrings(string).forEach(string =>{
      if (string.split('').reverse().join('') === string && (string.length > 1)){
        palindromeArray.push(string)
      }
    });

    return palindromeArray;
  }

}

// sum of sums


{

function sumOfSums(array) {

  let arrayAllNums = [];

  for (i = 0; i <= array.length; i +=1) {
    arrayAllNums.push(array.slice(0,i));
  }

  return arrayAllNums.flat().reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  });
}

  console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  console.log(sumOfSums([4]));              // 4

}

//grocery list

{
function buyFruit(array) {
  let listArray = [];

  array.forEach(subarray => {
    let fruit = subarray[0]
    let number = subarray[1]
    for (i = 0; i < number; i +=1) {
      listArray.push(fruit);
    }
  })
  
  return listArray;

}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
}

// inventory item transactions

{
  let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

  function transactionsFor(number, arrayOfObjects) {
    let returnArray = [];

    arrayOfObjects.forEach(object => {
      if (object['id'] === number) {
        returnArray.push(object)
      }
    })

    return returnArray;
  }

  console.log(transactionsFor(101, transactions));

}

//inventory item availability 



{


  let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

function transactionsFor(number, arrayOfObjects) {
  let returnArray = [];

  arrayOfObjects.forEach(object => {
    if (object['id'] === number) {
      returnArray.push(object)
    }
  })

  return returnArray;
}
  function isItemAvailable(number, arrayOfObjects) {
    let itemTotal = 0;

    transactionsFor(number,arrayOfObjects).forEach(object => {
      if (object['movement'] === 'in') {
        itemTotal += object['quantity'];
      } else {
        itemTotal -= object['quantity']

      }
    });

    if (itemTotal > 0) {
      return true;
    } else {
      return false;
    }
  }
}