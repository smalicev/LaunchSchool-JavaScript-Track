//lettercase percentage ratio

/*
{

  function letterPercentages(string) {
    let stringArray = string.split('');
    let lowercaseOcc = 0;
    let uppercaseOcc = 0;
    let neitherOcc = 0;

    stringArray.forEach(character => {
      if (/[A-z]/i.test(character) === false) {
        neitherOcc += 1;
      } else if (character.toUpperCase() === character) {
        uppercaseOcc += 1;
      } else if (character.toLowerCase() === character) {
        lowercaseOcc += 1;
      }
    });

    let percentageObj = { lowercase: ((lowercaseOcc / string.length) * 100).toString(), uppercase: (uppercaseOcc / string.length), neither: (neitherOcc / string.length)}
    return percentageObj;
  }

  console.log(letterPercentages('abCdef 123'));
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
  
  console.log(letterPercentages('AbCd +Ef'));
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
  
  console.log(letterPercentages('123'));
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
  


}

// unlucky days


{

  function fridayThe13ths(year) {
    let numFridays = 0;
    let targetYear = new Date(year.toString());
    let nextYear = new Date((year + 1).toString());
    let yearDays = (nextYear - targetYear) / (1000*60*60*24);
    let dayInYear = targetYear;

    for (i = 0; i < yearDays; i += 1) {
      if (dayInYear.getDate() === 13 && dayInYear.getDay() === 5) {
        numFridays += 1;
      }
      dayInYear.setDate(dayInYear.getDate() + 1)
    }

    return numFridays;
  }

  console.log(fridayThe13ths(1986));      // 1
  console.log(fridayThe13ths(2015));      // 3
  console.log(fridayThe13ths(2017));      // 2

}

// next featured number

{
  function featured(number) {



  }


  featured(12);           // 21
  featured(20);           // 21
  featured(21);           // 35
  featured(997);          // 1029
  featured(1029);         // 1043
  featured(999999);       // 1023547
  featured(999999987);    // 1023456987
  featured(9876543186);   // 9876543201
  featured(9876543200);   // 9876543201
  featured(9876543201);   // "There is no possible number that fulfills those requirements."


}

// sum square

{

  function sumSquareDifference(number) {
    let numArrayOne = [];
    let numArrayTwo = [];

    for (i = 1; i <= number; i += 1) {
      numArrayOne.push(i);
      numArrayTwo.push(i);
    }

    let squareSum = numArrayOne.reduce((accumulator, currentVal) => {
      return accumulator + currentVal;
    })**2;
    
    let sumOfSquare = numArrayTwo.reduce((accumulator, currentVal) => {
      return accumulator + currentVal**2
    });

    return squareSum - sumOfSquare;

  }


  console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  console.log(sumSquareDifference(10));     // 2640

}
*/
// bubble sort

{

  let array1 = [5, 3];
  bubbleSort(array1);
  console.log(array1);    // [3, 5]

  let array2 = [6, 2, 7, 1, 4];
  bubbleSort(array2);
  console.log(array2);    // [1, 2, 4, 6, 7]

  function bubbleSort(array) {
    let swap = false;

    do {
      swap = false;
      for (i = 0; i < array.length; i += 1) {
        if (array[i] > array[i+1]) {
          let placeholder = array[i];
          array[i] = array[i+1]
          array[i+1] = placeholder;
          swap = true
        }
      }
    } while (swap === true)

    return array;
  }


}