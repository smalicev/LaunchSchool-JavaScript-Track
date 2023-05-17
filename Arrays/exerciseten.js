let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];


function replaceSixZeroSix(array) {
  array.forEach(function(row){
    if (row.includes(6) === true) {
    row.splice(row.indexOf(6),1,606)
    }})
  };

replaceSixZeroSix(arr)
console.log(arr);

