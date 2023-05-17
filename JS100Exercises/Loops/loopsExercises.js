for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Countdown
for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}

//Triple Greeting
let greeting = 'Aloha!';
for (let i = 1; i <= 3; i += 1) {
  console.log(greeting);
}

//Take Two
for (let i = 1; i <= 100; i += 1) {
  console.log(i*2);
}

//Looping over array elements
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

//Continue
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (i = 0; i < cities.length; i += 1) {
  if (cities[i] === null){
    continue;
  }
  console.log(cities[i].length);
}


// And on and on and on  --- it has no stop conditional on the loop. JS treats it as true when it's empty.
for (let i = 0; i < 1 ; i += 1) {
  console.log("and on");
}

//That's Odd

let oddIndex = 0;

while (oddIndex < 40) {
  if (oddIndex % 2 === 1){
    console.log(oddIndex);
  }
  oddIndex += 1;
}

//Finding Nemo
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (i=0; i<fish.length; i+= 1) {
  if (fish[i] === 'Nemo'){
    break;
  }
  console.log(fish[i]);
}

