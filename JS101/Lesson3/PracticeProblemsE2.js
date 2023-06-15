{
  let advice = "Few things in life are as important as house training your pet dinosaur.";
  
  let newAdvice = advice.replace('important','urgent');

  console.log(newAdvice);
}


{
    let numbers = [1, 2, 3, 4, 5];
  numbers.reverse();
  console.log(numbers); // [ 5, 4, 3, 2, 1 ]
  
  numbers = [1, 2, 3, 4, 5];
  numbers.sort((num1, num2) => num2 - num1);
  console.log(numbers); // [ 5, 4, 3, 2, 1 ]

}

{
  let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

  let number1 = 8;  // false
  let number2 = 95; // true

  console.log(numbers.includes(number1));
  console.log(numbers.includes(number2));
}

{
  let famousWords = "seven years ago...";

  let finalWords = "Four score and " + famousWords;

  let finalWords2 = "Four score and ".concat(famousWords);
  console.log(finalWords);
  console.log(finalWords2);
}

{
  let array = [1,2,3,4,5];

  array.splice(2,1);

  console.log(array)
}

{
  let flintsontes = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

  let newarray = flintsontes.flat();

  console.log(newarray);
}

{
  let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

  console.log(Object.entries(flintstones));
  let array = Object.entries(flintstones)[2];

  console.log(array);
}

{
  let title = "Flintstone Family Members";

  console.log(title.padStart(500));

}

{
  let statement1 = "The Flintstones Rock!";
  let statement2 = "Easy come, easy go.";

 console.log( statement1.match(/t/g).length)
}