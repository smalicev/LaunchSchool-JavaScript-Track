console.log(isNegativeZero(-0)) //should return true
console.log(isNegativeZero(0)) //should return false


function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

let x = 5;
console.log(x++)
console.log(x);