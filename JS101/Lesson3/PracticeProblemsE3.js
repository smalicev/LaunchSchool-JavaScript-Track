{
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;

arr2[2] = 5;

console.log(arr2); // [ { first: 42 }, { second: 'value2' }, 5, 4, 5 ]

console.log(arr1); // [ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]

arr1.shift()

console.log(arr2); //  [ { first: 42 }, { second: 'value2' }, 5, 4, 5 ]

console.log(arr1); // [ { second: 'value2' }, 3, 4, 5 ]
}
/// BUT if we use reassignment isntead of slice (slice makes a shallow copy)
{
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1
arr2[0].first = 42;

arr2[2] = 5;


console.log(arr2); // [ { first: 42 }, { second: 'value2' }, 5, 4, 5 ]

console.log(arr1); // [ { first: 42 }, { second: 'value2' }, 5, 4, 5 ]

arr1.shift()

console.log(arr2); //  [ { second: 'value2' }, 5, 4, 5 ]

console.log(arr1); // [ { second: 'value2' }, 5, 4, 5 ]
}
