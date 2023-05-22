let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, 'lab')); // => ['laboratory', 'flab', 'elaborate']

function allMatches(array, toMatch) {
let regex = new RegExp (toMatch, 'g')

let matchedArray = [];

  array.forEach(function(word) {
    if (regex.test(word)) {
      matchedArray.push(word);
    }
  })
return matchedArray;
}