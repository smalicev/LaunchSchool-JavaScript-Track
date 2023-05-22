//Greet 2

{
  function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ", " + recipient + "!");
  }


  greet();                                // logs: Hello, world!
  greet('Salutations');                   // logs: Salutations, world!
  greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
}

// Greet 3

{
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting() + ", " + recipient() + "!");
  }

  greet();                                // logs: Good morning, Launch School!
}


///Calculate BMI

// Given that: bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(cmHeight,KgWeight){
  console.log(Math.round((KgWeight/((cmHeight/100)**2)) * 100) / 100)
}

calculateBMI(180, 80); // "24.69"

//Calculate Cat Age
/*
    The first human year corresponds to 15 cat years.
    The second human year corresponds to 9 cat years.
    Every subsequent human year corresponds to 4 cat years.
*/

function catAge(humanYears) {
  let catYears = 0;

  for (i = humanYears; i>0; i-= 1) {
    if (i === 1) {
      catYears = catYears + 15;
    } else if (i === 2) {
      catYears = catYears + 9;
    } else {
      catYears = catYears + 4;
    }
  }
  return catYears;
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));


//Remove last char
{
  console.log(removeLastChar('ciao!')); // 'ciao'
  console.log(removeLastChar('hello')); // 'hell'

  function removeLastChar(string) {
    return string.slice(0,string.length-1);
  }

}

//Arrow Function p1
{
  const template = 'I VERB NOUN.';

  let sentence = (verb, noun) => template
      .replace('VERB', verb)
      .replace('NOUN', noun);

  console.log(sentence('like', 'birds'));
  // logs: I like birds.
}

//Arrow functions P2

{
  let initGame = () =>({
                        level: 1,
                        score: 0
                      })
  
  let game = initGame();
  
  console.log('Level: ' + game.level);
  console.log('Score: ' + game.score);
}