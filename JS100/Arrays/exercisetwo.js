let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

  function logEven(array) {
    console.log(array.filter(element => (element % 2) === 0));
  }

  logEven(myArray);