//daily double

{
  function crunch1(string) {
    return string.replace(/[^\w\s]|(.)(?=\1)/gi, '');
  }

  function crunch(text) {
    let index = 0;
    let crunchText = '';
  
    while (index <= text.length - 1) {
      if (text[index] !== text[index + 1]) {
        crunchText += text[index];
      }
  
      index += 1;
    }
  
    return crunchText;
  }

  console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
  console.log(crunch('4444abcabccba'));              // "4abcabcba"
  console.log(crunch('ggggggggggggggg'));            // "g"
  console.log(crunch('a'));                          // "a"
  console.log(crunch(''));                           // ""

}

//Stringy Strings

{
  function stringy(number) {
    let binarySoup = '';
    for (i = 0; i < number; i += 1) {
      if (i % 2 === 0) {
        binarySoup = binarySoup + '1';
      } else {
        binarySoup = binarySoup + '0';
      }
    }
    return binarySoup;
  }

  console.log(stringy(6));    // "101010"
  console.log(stringy(9));    // "101010101"
  console.log(stringy(4));    // "1010"
  console.log(stringy(7));    // "1010101"

}

//Right Triangles

{
  function triangle(number) {
    let string = '';

    for (i = 0; i < number; i+= 1) {
      string = string + " ".repeat(number - i) 
      string =  string + '*'.repeat(i) + '\n';
    }

    return string;
  }

  console.log(triangle(25));
}

// Double Doubles

{
  function twice(number) {
    let string = number.toString()
    let firstHalf = string.substring(0,(string.length/2))
    let secondHalf = string.substring((string.length/2), string.length)

    if (firstHalf === secondHalf) {
      return number;
    } else {
      return number * 2 
    }
  }
  console.log(twice(37));          // 74
  console.log(twice(44));          // 44
  console.log(twice(334433));      // 668866
  console.log(twice(444));         // 888
  console.log(twice(107));         // 214
  console.log(twice(103103));      // 103103
  console.log(twice(3333));        // 3333
  console.log(twice(7676));        // 7676
}

//Clean up the words

{
  function cleanUp(string) {
    return string.replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, " ");
  }
  console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
}

//What Century?

{
  function century(year) {
    let yearLength = year.toString().length;
    let yearDivisor = 10**(yearLength - 2);

    let twoDigitYear = (year / yearDivisor)

    if (year % yearDivisor === 0) {
      return twoDigitYear + 'th';
    } else {
      return twoDigitYear + 1 + ordinals(twoDigitYear)
    }
  }

  function ordinals(number) {
    let string = number.toString();
    let stringLength = string.length;
    


    if (string.charAt(stringLength - 1) == 1){
      return 'st'
    } else if (string.charAt(stringLength - 1) == 2) {
      return 'nd'
    } else if (string.charAt(string.length - 1) == 3) {
      return 'rd'
    } else {
      return 'th'
    }
  }
 
  console.log(century(2000));        // "20th"
  console.log(century(2001));        // "21st"
  console.log(century(1965));        // "20th"
  console.log(century(256));         // "3rd"
  console.log(century(5));           // "1st"
  console.log(century(10103));       // "102nd"
  console.log(century(1127));        // "12th"
  console.log(century(11201));       // "113th"

}