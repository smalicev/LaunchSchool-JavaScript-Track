// Length
let string = "These aren't the droids you're looking for."

console.log(string.length);

// ALLCAPS

let stringTwo = 'confetti floating everywhere'

console.log(stringTwo.toUpperCase());

//Repeat

let stringThree = 'Test';

function repeatString(number, word) {
let finalString = '';

  for (i = 0; i < number; i += 1) {
    finalString += word;
  }
  return finalString;
}

console.log(repeatString(3,stringThree));

//Case-insensitive Equality

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';


console.log(string1.toLowerCase() === string2.toLowerCase()); // true
console.log(string1.toLowerCase() === string3.toLowerCase()); // false

console.log(string1 == string2); // false

//Contains Character

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(/x/.test(byteSequence));

//Blank? V1
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

function isBlank(string) {
  if (string.length === 0) {
    return true;
  } else {
    return false;
  }
}

//Blank? V1
console.log(isBlank2('mars')); // true
console.log(isBlank2('  '));   // true
console.log(isBlank2(''));     // false

function isBlank2(string) {
  if (string.length !== 0) {
    return true;
  } else {
    return false;
  }
}

//Capitalize Words

let stringFour = 'launch school tech & talk';

function titleCase(string) {
  let sentence = string.split(' ');
  let regex = /\w/
  for (i = 0; i < sentence.length; i += 1) {
    let firstLetter = sentence[i].charAt(0).toUpperCase();
    sentence[i] = sentence[i].replace(regex,firstLetter);
  }
  return sentence.join(" ");  
}

console.log(titleCase(stringFour));