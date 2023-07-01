const readline = require('readline-sync');
const SUITES = ['hearts', 'diamonds', 'clubs', 'spades'];
const JACK = QUEEN = KING = 10;
const ACE = aceValue();
const VALUES = [2,3,4,5,6,7,8,9,10, JACK, QUEEN, KING, ACE];

function aceValue() {
  return 1 || 11;
}


function createDeck() {
  let deckArray = [];

  SUITES.forEach(suite => {
    VALUES.forEach(value => {
      deckArray.push([suite,value])
    })
  })
  return deckArray
}

// The Fisher Yates Shuffle, shamelessy taken from stack overflow
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function dealHand(playerID) {
  hit(playerID);
  hit(playerID);
}

function hit(playerID) {
  playerID.cards.push(deckArray[0])
  deckArray.shift();
}

function stay(playerID) {
  let stay;
  return playerID.stay = true
}

function bust(playerID) {
  let bust;
  return playerID.bust = true;
}

function participantObject(playerID) {
  return { cards: [], ID: playerID, turn: 0, score: 0, bust: false, stay: false}
}

function dealerRules(playerID) {
  let total = playerID.cards.reduce((previousValues, currentValue) => {
    previousValues + currentValue[1]
  })

  if (total < 17) {
    hit(playerID);
  } else {
    bust(playerID);
  }
}

