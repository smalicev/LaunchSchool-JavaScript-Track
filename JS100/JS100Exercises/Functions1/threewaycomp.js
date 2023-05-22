
function compareByLength(stringA,stringB) {
  if (stringA.length > stringB.length) {
    return 1;
  } else if (stringA.length < stringB.length) {
    return -1;
  } else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0