let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


function oddLengths(array) {
  return (array.map(function(elements) {
    return elements.length;
  })).filter(function(value) {
     return (value % 2 === 1)
  })
}