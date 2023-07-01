const BLOCKS = { B:'O',   X:'K',   D:'Q',   C:'P',   N:'A',
G:'T',   R:'E',   F:'S',   J:'W',   H:'U',
V:'I',   L:'Y',   Z:'M' }


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true


function isBlockWord(string) {
  let stringArray = string.split('');
  let blockArray = Object.entries(BLOCKS).flat();

  stringArray.forEach((character,idx) => {
    stringArray[idx] = stringArray[idx].toUpperCase();
  });

  for (const property in BLOCKS) {
    if(stringArray.includes(BLOCKS[property]) && stringArray.includes(property)) {
      return false;
    }
  }

  stringArray.forEach((element, idx) => {
    blockArray.forEach((character, jdx) => {
      if (stringArray[idx] === blockArray[jdx]) {
        blockArray.splice(jdx,1);
      } 
    }

  })

  


}