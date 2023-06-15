// cute angles

{

  function dms(float) {
    let angle = float;

    let angleString = angle.toString();

    let angleArray = angleString.split('.')

    let degrees = angleArray[0] + '°'

    let minutes = Math.floor(angleArray[1] * 6) + '\''

    let seconds = ((angleArray[1] * 6) - Math.floor(angleArray[1] * 6)) * 6 + "\""

    return degrees + minutes + seconds
  }
  console.log(dms(50.2))

  console.log(dms(30));           // 30°00'00"
  dms(76.73);        // 76°43'48"
 console.log( dms(254.6));        // 254°35'59"
  dms(93.034773);    // 93°02'05"
  dms(0);            // 0°00'00"
  dms(360);          // 360°00'00" or 0°00'00"
}


// combining arrays

{
  function union(array1, array2) {

    let unionArray = array1.map((element) => element);

    for (i = 0; i < array2.length; i += 1) {
      if (array1.includes(array2[i])){
        continue
      } else {
        unionArray.push(array2[i])
      }
    }

    let unionSet = [...new Set(unionArray)];

    return unionSet
  }


  console.log(union([1, 3, 5, 8, 3, 4, 3], [3, 6, 9]));    // [1, 3, 5, 6, 9]

}

//Halvsies

{

  function halvsies(array) {
    let array1 = [];
    let array2 = [];
    let finalArray = [array1, array2]

    for (i = 0; i < array.length; i += 1) {

      if (i < (array.length / 2)) {
        array1.push(array[i]);
      } else {
        array2.push(array[i])
      }
    }

    return finalArray;
  }


  console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
  console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
  console.log(halvsies([5]));                // [[5], []]
  console.log(halvsies([]));                 // [[], []]
}

// interleave

{
  function interleave(array1, array2){
    let finalArray = [];

    for (i = 0; i < array1.length; i +=1) {
      finalArray.push(array1[i]);
      finalArray.push(array2[i]);
    }

    return finalArray;
  }

  console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
}

// multiplicative average

{

  function multiplicativeAverage(array){
    let total = array[0];

    for (i = 1; i < array.length; i += 1) {
      total = (total * array[i])
    }

    return (total/array.length).toFixed(3);

  }
  console.log(multiplicativeAverage([3, 5]));                   // "7.500"
  console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

}


// multiply list pairs

{
  function multiplyList(array1, array2) {
    let finalArray = [];

    for (i = 0; i < array1.length; i += 1) {
      finalArray[i] = array1[i] * array2[i]
    }
    return finalArray;
  }

  console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

}


// list of digits


{

  function digitList(number) {
    let array = number.toString().split('')

    let arrayMapped = array.map((element) => Number(element));

    return arrayMapped;
  }

  console.log(digitList(12345));       // [1, 2, 3, 4, 5]
  console.log(digitList(7));           // [7]
  console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
  console.log(digitList(444));         // [4, 4, 4]
}


// how many occurences

{

  let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

  countOccurrences(vehicles);

  function countOccurrences(elements) {
    let occurrences = {};
  
    for (let idx = 0; idx < elements.length; idx += 1) {
      occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
      occurrences[elements[idx]] += 1;
    }
  
    logOccurrences(occurrences);
  }
  
  function logOccurrences(occurrences) {
    for (let item in occurrences) {
      console.log(`${item} => ${occurrences[item]}`);
    }
  }
}


// array average

{

  function average(array){
    let total = 0;

    for (i = 0; i < array.length; i += 1) {
      total = (total + array[i])
    }

    return Math.floor(total/array.length);

  }
  console.log(average([1, 5, 87, 45, 8, 8]));       // 25
  console.log(average([9, 47, 23, 95, 16, 52]));    // 40

}


// after midnight p1
{

  function timeOfDay (number) {
    const SETTIME = 1440;
    let dailyNumber = number % 1440;

    let setTime;

    if (number < 0) {
      setTime = SETTIME;
    } else {
      setTime = 0;
    }

    let time = setTime + dailyNumber
    let hour = Math.floor(time/60).toString().padStart(2,'0');
    let minutes = (time % 60).toString().padStart(2,'0');

    return `${hour}:${minutes}`

  }
  
  console.log(timeOfDay(0) === "00:00");
  console.log(timeOfDay(-3) === "23:57");
  console.log(timeOfDay(35) === "00:35");
  console.log(timeOfDay(-1437) === "00:03");
  console.log(timeOfDay(3000) === "02:00");
  console.log(timeOfDay(800) === "13:20");
  console.log(timeOfDay(-4231) === "01:29");

}


// after midnight p2
{

  function timeOfDay (string) {
    const SETTIME = 1440;
    let dailyNumber = number % 1440;

    let setTime;

    if (number < 0) {
      setTime = SETTIME;
    } else {
      setTime = 0;
    }

    let time = setTime + dailyNumber
    let hour = Math.floor(time/60).toString().padStart(2,'0');
    let minutes = (time % 60).toString().padStart(2,'0');

    return `${hour}:${minutes}`

  }
  
  console.log(timeOfDay(0) === "00:00");
  console.log(timeOfDay(-3) === "23:57");
  console.log(timeOfDay(35) === "00:35");
  console.log(timeOfDay(-1437) === "00:03");
  console.log(timeOfDay(3000) === "02:00");
  console.log(timeOfDay(800) === "13:20");
  console.log(timeOfDay(-4231) === "01:29");

}


