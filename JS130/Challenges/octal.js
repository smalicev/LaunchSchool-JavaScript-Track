// octal to decimal conversion


class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    let quotient = Math.floor(this.octal / 8);
    let remainder = this.octal % 8;
    

  }
}


module.exports = Octal;