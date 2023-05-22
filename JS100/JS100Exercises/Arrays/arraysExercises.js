//First Element

console.log(firstElement(['Earth', 'Moon', 'Mars'])); // 'Earth'

function firstElement(array) {
  return array[0];
}

//Last Element

console.log(lastElement(['Earth', 'Moon', 'Mars'])); // 'Earth'

function lastElement(array) {
  return array[array.length -1];
}

//Add + Delete

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(0,1)

energy.push('geothermal')

console.log(energy);

//Alphabet
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

let alphabetarray = alphabet.split('');

console.log(alphabetarray);

//Filter

{
  let scores = [96, 47, 113, 89, 100, 102];

  console.log(scores.filter(function(value){
    return value >= 100;
  }).length)
}

//Vocabulary

{
  let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

  for (i = 0; i <vocabulary.length; i += 1) {
    for (j = 0; j < vocabulary[i].length; j+= 1){
      console.log(vocabulary[i][j]);
    }
  }
}

//Travel

{
  let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(city, array){
    for (i = 0; i < array.length; i += 1) {
      if (array[i] === city){
        return true;
      }
    }
    return false;
  }

  console.log(contains('Barcelona', destinations)); // true
  console.log(contains('Nashville', destinations)); // false
}

//Passcode

{
  let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

  let finalPasscode = [];

  for (i = 0; i < passcode.length; i += 1) {
    finalPasscode = passcode.join('-');
  }

  console.log(finalPasscode);
}


//Grocery List
{
  let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
// Your code.
  while (groceryList.length > 0) {
    console.log(groceryList[0])
    groceryList.splice(0,1)
  }
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus
  console.log(groceryList); // []
}