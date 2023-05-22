let rlSync = require('readline-sync')

function greetPeople(fullName) {
  let greetingMessage = `Good Morning ${fullName}`;
  console.log(greetingMessage);
}

function getName() {
  let firstName = rlSync.question("What is your first name?\n");
  let lastName = rlSync.question("What is your last name?\n");
  return firstName + " " + lastName
};


greetPeople(getName());
