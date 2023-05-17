test = 4

console.log(isNotANumber('b')) // should return true (NaN)
console.log(isNotANumber(5)) // should return false
console.log(isNotANumber(['eaf', 'aee'])) // should return true
console.log(isNotANumber(test)) // should return false
console.log(isNotANumber({a: 'words'})) // should return true
console.log(isNotANumber(null)) // should return true
console.log(isNotANumber(undefined)) // should return true
console.log(isNotANumber({})) // should return true

function isNotANumber(value) {
  if (value/0 !== Infinity) {
    return true;
  } else {
    return false;
  }
}
