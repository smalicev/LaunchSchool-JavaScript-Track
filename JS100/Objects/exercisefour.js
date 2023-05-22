let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let objKeys = Object.keys(obj);

for (i = 0; i < objKeys.length; i += 1) {
  objKeys[i] = objKeys[i].toUpperCase();
}

console.log(objKeys);
console.log(obj);