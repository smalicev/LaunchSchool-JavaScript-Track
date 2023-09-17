




class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
    this.wordArray = this.word.split('').sort()
    this.matches = [];
  }

  match(array){
    let lowerCase = array.map((word, idk) => {
      return array[idk].toLowerCase();
    })

    lowerCase.forEach((word,idx) => {
      if (lowerCase[idx] === this.word) {
      } else if (lowerCase[idx].split('').sort().join('') === this.wordArray.join('')) {
        this.matches.push(word)
      } 
    })

    return this.matches;
  }
}

module.exports = Anagram;