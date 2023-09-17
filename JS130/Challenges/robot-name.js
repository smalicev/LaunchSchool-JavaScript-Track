class Robot {
  constructor() {
    this.currentName = this.generateUniqueName();
    Robot.robotNames.push(this.currentName);
  }
  static robotNames = [];

  generateUniqueName() {
    let rdName = '';
    do {
    //get random letters
    for (let i = 0; i < 2; i ++) {
      let position = Math.floor(Math.random() * (90 - 65) + 65);
      let char = String.fromCharCode(position);
      rdName += char;
    }
  
    //get random numbers
    for (let i = 0 ; i < 3; i ++) {
    let  num = Math.floor(Math.random() * (9 - 0) + 0)
    rdName += num;
    }

  } while (this.isNotValidName(rdName))

    return rdName;
  }

  name() {
    return this.currentName;
  }

  isNotValidName(checkName) {
    return Robot.robotNames.some(name => name === checkName)
  }

  reset() {
    this.currentName = this.generateUniqueName();
  }

}


module.exports = Robot;