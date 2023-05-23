const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function negativeValue(number) {
  return number < 0;
}

function loanCalc(loanAmt, APR, months) {
  let monthlyIntr = APR / 1200;
  let monthlyPayment =
  loanAmt * ((monthlyIntr) / (1 - Math.pow((1 + (monthlyIntr)), (-months))));
  return monthlyPayment;
}

function toDollarCents(amount) {
  return "$" + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


let restart = "";

prompt("This program will calculate the monthly payment required to pay off \n a loan given the principal amount, APR, and duration of payment.");

do {
  prompt("What is your initial loan amount, in dollars?");
  let loanAmt = readline.question();

  while (invalidNumber(loanAmt) || negativeValue(loanAmt)) {
    prompt("The amount needs to be a non-negative number.");
    loanAmt = readline.question();
  }

  prompt("At what Annual Percentage Rate, as a percentage, was the loan approved at?");
  let APR = readline.question();

  while (invalidNumber(APR) || negativeValue(APR)) {
    prompt("The interest rate needs to be a non-negative number.");
    APR = readline.question();
  }

  prompt("How many months should this loan be paid in?");
  let months = readline.question();

  while (invalidNumber(months) || negativeValue(months)) {
    prompt("The number of months needs to be a non-negative number.");
    months = readline.question();
  }

  prompt('Your monthly payment is: ' + toDollarCents(loanCalc(loanAmt, APR, months)));
  prompt("Would you like to restart? Please enter 'y' for yes or 'n' for no, and hit enter.");
  restart = readline.question();

} while (restart === "y");