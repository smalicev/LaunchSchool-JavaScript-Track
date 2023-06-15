function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words[index] = null;
    }
  });
  return words.filter(word => word !== null).join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic dull board game.")
);


let array = [1,2]

console.log(array[-1])


{

  let arr = [1];
arr.length = 4;
arr.push(5);
console.log(Object.keys(arr).length === arr.length); // => false
console.log(arr)

console.log(Object.keys(arr))
}