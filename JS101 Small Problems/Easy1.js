// Isnt it odd?

{
  function isOdd(number) {
    let absoluteNumber = Math.abs(number);
    return absoluteNumber % 2 !== 0 
  }

  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true
  console.log(isOdd(-8)); // => false
  console.log(isOdd(0)); // => false
  console.log(isOdd(7)); // => true

}

// Odd numbers

{
  function logOddto99() {
    for (i = 1; i < 100; i += 2) {
      console.log(i + '\n');
    }
  }

  logOddto99();
}

// Even Numbers

{
  function logEvento99() {
    for (i = 2; i < 99; i += 2) {
      console.log(i + '\n');
    }
  }

  logEvento99();
}

// How big is the room?

{
  function roomSize(length, width) {
    area = length * width;
    return area 
  }
}

// Tip Calculator

// Short Long Short

{
  function shortLongShort(stringOne, stringTwo) {
    return stringOne.length >= stringTwo.length ? (stringTwo + stringOne + stringTwo) : (stringOne + stringTwo + stringOne);
  }

  console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
  console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
  console.log(shortLongShort('', 'xyz'));         // "xyz"
}


// Leap Years

{
  function isLeapYear(year) {
    if (year > 1752){
      if (year % 400 === 0) {
       console.log(true);
      } else if (year % 100 !== 0 && year % 4 === 0){
       console.log(true);
      } else {
        console.log(false);
      }
    } else {
      if (year % 4 === 0) {
        console.log(true)
      } else {
        console.log(false);
      }
    }
  }

  isLeapYear(2016);      // true
  isLeapYear(2015);      // false
  isLeapYear(2100);      // false
  isLeapYear(2400);      // true
  isLeapYear(240000);    // true
  isLeapYear(240001);    // false
  isLeapYear(2000);      // true
  isLeapYear(1900);      // false
  isLeapYear(1752);      // true
  isLeapYear(1700);      // true
  isLeapYear(1);         // false
  isLeapYear(100);       // true
  isLeapYear(400);       // true
  
}


// Multiples of 3 and 5

{
  function multisum(number) {
    let sum = 0;

    for (i = number; i > 0; i-= 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  } 

  console.log(multisum(3));       // 3
  console.log(multisum(5));       // 8
  console.log(multisum(10));      // 33
  console.log(multisum(1000));    // 234168
}

