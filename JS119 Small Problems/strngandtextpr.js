//uppercase check
/*
{
  
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

function isUppercase(string){
  let stringArray = string.split('');
  return stringArray.every((element, idx) => {
    return stringArray[idx] === stringArray[idx].toUpperCase();
  });
}

}

// Delete Vowels

{

  function vowelTest(s){
    return (/^[aeiou]$/i).test(s);
  }

  function removeVowels(array) {
    let removedVowelArray = [];

    array.forEach((string, idS)=> {
      let stringArray = string.split('')

      stringArray.forEach((character, idx) => {
        if (vowelTest(character) === true) {
          stringArray.splice(idx,1);
        }
      
      })
      removedVowelArray.push(stringArray.join(''));
    })

    return removedVowelArray;
  }

  console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
  console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
  console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
}


// lettercase counter

{
  console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
  console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
  console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
  console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


  function letterCaseCount(string) {
    let caseCountObj = {lowercase: 0, uppercase: 0, neither: 0};

    let stringArray = string.split('');

    stringArray.forEach((character, idx) => {
      if (/[A-z]/i.test(stringArray[idx]) === false) {
        caseCountObj['neither'] += 1;
      } else if (stringArray[idx] === stringArray[idx].toUpperCase()){
        caseCountObj['uppercase'] += 1;
      } else if (stringArray[idx] !== stringArray[idx].toUpperCase()) {
        caseCountObj['lowercase'] += 1;
      }
    })
    return caseCountObj;
  };

}

//Capitalize Words

{

  console.log(wordCap('four score and seven'));       // "Four Score And Seven"
  console.log(wordCap('the javaScript language'));    // "The Javascript Language"
  console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

  function wordCap(string) {
    let stringArray = string.split(' ');

    stringArray.forEach((string, idx) => {
      stringArray[idx] = string[0].toUpperCase() + string.substring(1,string.length).toLowerCase();
    })

    return stringArray.join(' ');

  }

}
  // Swap Case



{
    console.log(swapCase('CamelCase'));              // "cAMELcASE"
    console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

    function swapCase(string) {
      let stringArray = string.split('');

      stringArray.forEach((character, idx) => {
        if (stringArray[idx] === stringArray[idx].toUpperCase()) {
          stringArray[idx] = stringArray[idx].toLowerCase();
        } else if (stringArray[idx] === stringArray[idx].toLowerCase()) {
          stringArray[idx] = stringArray[idx].toUpperCase();
        } else {
          stringArray[idx] = stringArray[idx];
        }
      });

      
      return stringArray.join('');
    }
  }

*/
  // how long are you


  {
    function wordLengths(string) {
      let stringArray = string.split(' ');

      stringArray.forEach((element, idx) => {
        stringArray[idx] = stringArray[idx] + ' ' + element.length;
      })
      return stringArray;
      
    }



  }


// search word


{
  const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

  console.log(searchWord('sed', text));      // 3

  function searchWord(searchTerm, string) {
    let regexp = new RegExp(searchTerm, "gi")

    return string.match(regexp).length;
  }
}



//searchword 2

{
  const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

  console.log(searchWord('sed', text));
  function searchWord(searchTerm, string) {

    let regexp = new RegExp(searchTerm, "gi")
    let newValue = '**' + searchTerm.toUpperCase() + '**'
    let newString = string.replace(regexp, newValue);

    return newString
  }

}