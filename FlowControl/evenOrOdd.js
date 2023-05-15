function evenOrOdd(number) {
  if (typeof number !== "number"){
    console.log('Error, NaN');
    return;
  } else {
    if (parseInt(number/2) === (number/2)){
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}

evenOrOdd(5);
evenOrOdd(4);
evenOrOdd(1);
evenOrOdd(13);

evenOrOdd("b");