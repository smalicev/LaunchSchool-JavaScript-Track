let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your current age?\n'));

console.log(`You are ${age} years old.`);

for (futureYear= 10; futureYear<=40; futureYear += 10) {
  console.log(`In ${futureYear} years, you will be ${age + futureYear} years old.`);
}
