function numberRange(integer){
  if (integer < 0) {
    console.log(`${integer} is less than 0`);
  } else if (0<= integer && integer <= 50) {
    console.log(`${integer} is between 0 and 50`);
  } else if (51<= integer && integer <=100) {
    console.log(`${integer} is between 51 and 100`);
  } else if (integer > 100){
    console.log(`${integer} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);