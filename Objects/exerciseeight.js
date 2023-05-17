let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(originalObject, ...keys) {
let newObject = {};
Object.assign(newObject,originalObject);
  for (let prop in newObject) {
    if (newObject[prop] !== newObject[keys]){
      delete newObject[keys]
    }
  }
  return newObject;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }