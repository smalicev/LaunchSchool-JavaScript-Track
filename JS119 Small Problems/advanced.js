// transpose 3x3 matrix
/*
{


  function transpose(array) {
    let rows = array.length;
    let columns = array[0].length;
    let newMatrix = JSON.parse(JSON.stringify(array))

    for (i = 0; i < rows; i += 1) {
      for (j = 0; j < columns; j += 1) {
        newMatrix[j].splice(i, 1, array[i][j]);
      }
    }
    return newMatrix;
  }


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
}



//transpose nxn matrix


{

  function transpose(array) {
    let rows = array.length;
    let columns = array[0].length;
    let newMatrix = [];

    for (i = 0; i < rows; i += 1) {
      for (j = 0; j < columns; j += 1) {
        if (newMatrix[j] === undefined) {
          newMatrix.push([]);
        }
        newMatrix[j].splice(i, 1, array[i][j]);
      }
    }
    return newMatrix;
  }


  const matrix = [
    [1, 5, 8, 5],
    [4, 7, 2, 0],
    [3, 9, 6, 1]
  ];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
}


//rotating matrix

{

  let matrix1 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

  function rotate90(array) {
    let rows = array.length;
    let columns = array[0].length;

    let newMatrix = [];

    for (i = 0; i < columns; i += 1) {
      newMatrix.push([]);
      for (j = 0; j < rows; j += 1) {
        newMatrix[i].push(array[rows - j - 1][i]);
      }
    }
    return newMatrix;
  }

  let matrix2 = [
    [3, 7, 4, 2],
    [5, 1, 0, 8],
  ];

  let newMatrix1 = rotate90(matrix1);
  let newMatrix2 = rotate90(matrix2);
  let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));


  console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
  console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
  console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

}

*/

// merge sort

{

  function mergeSort(array) {
    let mid = array.length / 2;
    let startArray = array.slice(0,mid);
    let endArray = array.slice(mid,array.length);


    if (array.length === 2) {
      let a = array[0];
      let b = array[1];

      if (a === b) {
      } else if (a > b) {
        array[1] = a;
        array[0] = b;
      } else if (a < b) {
      }
  }




  }  
}

// binary search 

{

  function binarySearch(array, searchItem) {
    let middle = Math.floor(array.length / 2);
    let start = array.slice(0,middle);
    let end = array.slice(middle,array.length);

    if (array[middle] === searchItem) {
      return middle;
    } else if (array[middle] < searchItem) {
      return binarySearch(end,searchItem);
    } else if (array[middle] > searchItem) {
      return binarySearch(start,searchItem);
    }
  }

  let yellowPages = ['Apple Store',
  'Bags Galore',
  'Bike Store',
  'Donuts R Us',
  'Eat a Lot',
  'Good Food',
  'Pasta Place',
  'Pizzeria',
  'Tiki Lounge',
  'Zooper'];

  console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
  console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

}


{

  let yellowPages = ['Apple Store',
  'Bags Galore',
  'Bike Store',
  'Donuts R Us',
  'Eat a Lot',
  'Good Food',
  'Pasta Place',
  'Pizzeria',
  'Tiki Lounge',
  'Zooper'];

  function binarySearch(book, item){
    let splitIndex=book.length/2;
    let array1=book.slice(0,splitIndex);
    let array2=book.slice(splitIndex);
  
    if (item===book[splitIndex]){
      return splitIndex;
    } else if (array1.includes(item)){
      binarySearch(array1,item);
    } else {
      binarySearch(array2,item)
    } 
  }
  
  const result=binarySearch(yellowPages, 'Pizzeria');  
  console.log(result)
  


}