// Welcome Stranger

{
  function greetings(array, object){
    return "Hello, " + array[0] + " " + array[1] + " " + array[2] + "! You are a reknowned " + object['title'] + " " + object['occupation'];
  }
  console.log(
    greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );

}

//squaring an argument



{
  function multiply(num1, num2){
    return num1 * num2;
  }
  function square(num1){
    return multiply(num1,num1);
  }
  console.log(square(5) === 25); // logs true
  console.log(square(-8) === 64); // logs true
}


//The end is near but not here

{
  function penultimate(string) {
    let sentence = string.split(" ");
    let penultWord = sentence[sentence.length - 2];
    
    return penultWord;
  }
  console.log(penultimate("last word") === "last"); // logs true
  console.log(penultimate("Launch School is great!") === "is"); // logs true
}

// Exclusive OR

{
  function xor(arg1, arg2) {
    if (arg1 && arg2) {
      return false;
    } else if (arg1  || arg2) {
      return true;
    } else {
      return false;
    }
  }

  console.log(xor(5, 0) === true);          // true
  console.log(xor(false, true) === true);   // true
  console.log(xor(1, 1) === false);         // true
  console.log(xor(true, true) === false);   // true

}

//Odd Lists

{
  function oddities(array) {
    let oddArray = [];

    for (i = 0; i < array.length; i += 2){
      oddArray.push(array[i]);
    }

    return oddArray
  }

  console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
  console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
  console.log(oddities(["abc", "def"])); // logs ['abc']
  console.log(oddities([123])); // logs [123]
  console.log(oddities([])); // logs []
}


//Teddy age

{
  function oldTeddy() {
    return "Teddy is " + Math.floor((20 + Math.random()*100));
  }

  console.log(oldTeddy());
  console.log(oldTeddy());
  console.log(oldTeddy());
  console.log(oldTeddy());
  console.log(oldTeddy());
  console.log(oldTeddy());
  console.log(oldTeddy());
}

//retirement age
{
  function retireAge(currentAge, retirementAge) {
    let yearsOfWork = retirementAge - currentAge
    return  `It's 2017. You will retire in ${yearsOfWork + 2017}\n You only have ${yearsOfWork} years of work to go!`
  }
  console.log(retireAge(30,70));
}

//get middle character

{
  function centerOf(string) {
    if (string.length % 2 === 0) {
      return string.charAt(Math.floor((string.length/2)) - 1) + string.charAt((string.length/2));
    } else {
      return string.charAt((Math.floor((string.length/2))));
    }
  }


  console.log(centerOf('I Love JavaScript')); // "a"
  console.log(centerOf('Launch School'));     // " "
  console.log(centerOf('Launch'));            // "un"
  console.log(centerOf('Launchschool'));      // "hs"
  console.log(centerOf('x'));                 // "x"

}


// always negative

{
  function negative(number) {
    return number < 0 ? number : number * -1
  }

  console.log(negative(5));     // -5
  console.log(negative(-3));    // -3
  console.log(negative(0));     // -0
}