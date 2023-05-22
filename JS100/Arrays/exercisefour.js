let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = [];


function mapEvenOrOdd(array) {
 newArray = array.map(function(value){
    if (value % 2 === 0){
      return 'even'
    } else {
      return 'odd'
    }
  });
}

mapEvenOrOdd(myArray);
console.log(newArray);