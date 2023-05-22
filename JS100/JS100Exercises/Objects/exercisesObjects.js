//Retrieve a Value
{
  let student = {
    name: 'Carmen',
    age: 14,
    grade: 10,
    courses: ['biology', 'algebra', 'composition', 'ceramics'],
    gpa: 3.75,
  };

  console.log(student.courses);
}

//Retrieve a Value 2

{
  let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
  };

  console.log(jane.location.country);
}

//Add a property

{
  let fido = {
    name: 'Fido',
    species: 'Labrador Retriever',
    color: 'brown',
    weight: 16,
  };

  fido['age'] = undefined;
  fido["favourite food"] = undefined;
  console.log(fido);
}

//Greetings from Jane

{
  let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    greet: function(name) {
        console.log(`Hej, ${name}!`);
    },
  };
  
  jane.greet('Bobby'); // Hej, Bobby!  
}

// Car Keys

{
  let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  }; 

  keys = Object.keys(vehicle);
  console.log(keys);
}

//Convert an object to a nested array

{
  let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };
  
  // Expected output:
  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

  let Array = [];
  let k = Array.length;

  for (let prop in person) {
    Array.push([prop])
    Array[k].push(person[prop])
    k += 1;
  }
  console.log(Array);
}

//Convert nested array into an object
{
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let persons = {};

for (i = 0; i < nestedArray.length; i += 1) {
  for (j = 0; j < nestedArray[i].length; j +=1) {
    persons[nestedArray[i][0]] = nestedArray[i][j];
  }
}
console.log(persons);
}

// Cloning a person

{
  function clone(obj) {
    let clone = {};
    return Object.assign(clone,obj);
  }
  
  let person = {
    title: 'Duke',
    name: {
      value: 'Nukem',
      isStageName: true
    },
    age: 33
  };
  
  let clonedPerson = clone(person);
  person.age = 34;
  
  console.log(person.age);       // 34
  console.log(clonedPerson.age); // 33
  console.log(clonedPerson);
  
  person.name.isStageName = false;
  console.log(person.name.isStageName);       // false
  console.log(clonedPerson.name.isStageName); // false
}