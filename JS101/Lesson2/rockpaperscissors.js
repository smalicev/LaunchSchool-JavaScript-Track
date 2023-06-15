const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'Lizard', 'Spock'];
let playerWins = 0;
let computerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function decideWinner (choice,computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    return 1; // Player Wins
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
              (choice === 'paper' && computerChoice === 'scissors') ||
              (choice === 'scissors' && computerChoice === 'rock')) {
    return 0; // Computer Wins
  } else {
    return 2; // Draw
  }
}

function gameScore (winValue) {
  if (winValue === 1) {
    playerWins += 1;
  } else if (winValue === 0) {
    computerWins += 1;
  }
}

function displayGameState(choice, computerChoice, winValue) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (winValue === 1) {
    prompt('You win!');
  } else if (winValue === 0) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }

  prompt('The current score is: \n You: ' + playerWins + '\n Computer: ' + computerWins );
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  gameScore(decideWinner(choice,computerChoice));
  displayGameState(choice, computerChoice, decideWinner(choice, computerChoice));

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (playerWins === 5 || computerWins === 5) {
    prompt('Game Complete.');
    playerWins = 0;
    computerWins = 0;
  }

  if (answer[0] !== 'y') break;
}