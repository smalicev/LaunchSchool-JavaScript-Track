function hello(greeting, name) { // function itself is an object. greeting, name are variables
  return greeting + ' ' + name; // greeting and name are variables
}

function xyzzy() { // function itself is an object
  return { a: 1, b: 2, c: [3, 4, 5], d: {} }; // the whole array itself is an object. a, b, are primitive values. 345 array is an object, the emppty array is an object
                                              // 3 4 5 within the array are primitive values
}

const howdy = hello('Hi', 'Grace'); // howdy is a variable poiting to a function invocation (object?) hi and grace are prim values
let foo = xyzzy(); //foo is the same as above



//Solution notes

// FUNCTION NAMES ARE VARIABLES : 'HELLO' 'XYZZY'
// I didnt label prop names they are a b c d. array indexes are property names as well so 0 1 2 for the C: arraay
//empty string is a primitive vbalue, property names themselves are primitive values as they are strings.
// all objects were labelled correctly
// hi and grace are nto primitive as they have not been run yet...

function bar(arg1, arg2) { // arg1 and arg2 are variables, bar is a variable, the entire function is an object
  let foo = 'Hello'; // hello is a prim value, foo is a variable
  const qux = { // qux is a variable that points to an object
    abc: [1, 2, 3, [4, 5, 6]], // abc prop name nad prim value, points to an object, all values in the array are prim values except the array
    def: null,                 // the array holds pri mvalues and is an object, array indexes are property names and primitive values themselves
    ghi: NaN,                   // def is a prop name and prim vbalue, null is a prim value
    jkl: foo,                   // jkl is a prop name and prim value, foo is a variable poifunction bar(arg1, arg2) {
      let foo = 'Hello';
      const qux = {
        abc: [1, 2, 3, [4, 5, 6]],
        def: null,
        ghi: NaN,
        jkl: foo,
        mno: arg1,
        pqr: arg2,
      };
    
      return qux;
    }
    
    let result = bar('Victor', 'Antonina');nting ti a prim value
    mno: arg1,                  // mno prop name and prim vale, variable pointing to an argument/parameter
    pqr: arg2,                  // same as above
  };

  return qux;                   //qux is a variabkle
}

let result = bar('Victor', 'Antonina');   // result is a variable. bar is a function name, victor and antoninia are prim values