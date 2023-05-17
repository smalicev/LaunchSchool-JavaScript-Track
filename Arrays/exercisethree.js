let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let newArray = [];

  function logEven2D(array) {
    array.forEach(function(row) {
      row.forEach(function(value){
        if ((value % 2) === 0) {
          newArray.push(value);
          console.log(value);
        };
      })
    })
  }

console.log(logEven2D(myArray));
console.log(newArray);