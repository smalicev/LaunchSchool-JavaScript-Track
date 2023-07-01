function lightsOn(switches) {
  let count = switches;
  let array = [];

  for (i = 1; i <= count; i += 1) {
    array.push([i]);
  }

  for (y = 0; y < array.length; y += 1) {
    array[y].push('on')
  }

  for (j = 2; j <= count; j += 1) {
    for (k = 0; k < array.length; k += 1){
      if (array[k][0] % j === 0) {
        if (array[k][1] === 'off') {
          array[k][1] = 'on';
        } else {
          array[k][1] = 'off';
        }
      }
    }
  }

 let onArray = array.filter((subarray,idx) => {
    return subarray[1] === 'on';
  })
let finalArray = onArray.map(array => {
    return array[0];
  })

  return finalArray;
}


console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]