diamond(9);
/* logs

 *
***
 *

*/

function diamond(number) {
  let layers = number;
  let numStars = 1;
  
  for (let i = 1; i <= Math.ceil(layers/2); i += 1) {
    console.log('*'.repeat(numStars).padStart(Math.ceil(number/2)).padEnd(number/2))
    numStars += 2;
  }

  numStars -= 2;

  for (let j = Math.ceil(layers/2); j > 1; j -= 1) {
    numStars -= 2;
    console.log('*'.repeat(numStars).padStart(Math.ceil(number/2)).padEnd(number/2))
  }

}