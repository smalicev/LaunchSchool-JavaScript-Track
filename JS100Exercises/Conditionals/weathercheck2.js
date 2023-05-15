let weather = 'foggy';

switch (weather) {
  case 'rainy':
    console.log("Grab your umbrella.");
    break;
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'foggy':
    console.log("It is misty out.");
    break;
  default:
    console.log("Let's stay inside.");
    break;
}


let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

console.log(Date.now());