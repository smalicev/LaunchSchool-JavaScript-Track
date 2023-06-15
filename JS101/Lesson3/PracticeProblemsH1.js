function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false
    }
  }

  return true;
}




console.log(isDotSeparatedIpAddress('12.15.18.19')); // true

console.log(isDotSeparatedIpAddress('12a.15.18.19')); // false

console.log(isDotSeparatedIpAddress('12.15.18.19.22')); // false

console.log(isDotSeparatedIpAddress('.15.18.19')); // false

console.log(isDotSeparatedIpAddress('15.18.19')); // false