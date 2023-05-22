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

prompt("This program will calculate the monthly payment required to pay off \n a loan given the initial amount, interest rate, and duration of payment.");

prompt("What is your initial loan amount, in dollars?");
let loanAmt = readline.question();

while (invalidNumber(loanAmt) && negativeValue(loanAmt)) {
  prompt("The amount needs to be a non-negative number.");
  loanAmt = readline.question();
}

prompt("At what Annual Percentage Rate, as a percentage, was the loan approved at?");
let APR = readline.question();

while (invalidNumber(APR) && negativeValue(APR)) {
  prompt("The interest rate needs to be a non-negative number.");
  APR = readline.question();
}

prompt("How many months should this loan be paid in?");
let months = readline.question();

while (invalidNumber(months) && negativeValue(months)) {
  prompt("The number of months needs to be a non-negative number.");
  months = readline.question();
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

prompt('Your monthly payment is: ' + toDollarCents(loanCalc(loanAmt, APR, months)));