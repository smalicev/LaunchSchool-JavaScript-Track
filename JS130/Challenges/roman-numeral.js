// converts numbers to roman numerals

// conversion key:
// 1 = I
// 5 = V
// 10 = X
// 50 = L
// 100 = C
// 500 = D
// 1000 = M


// Roman numerals are expressed by adding these letters to the left or right of the largest letter used when converting.
// For example, the number 48: IIL
// 45 : VL
// 128: CXXVIII
// 300: CCC? or CCD?
// 331: 

// additional rule: no number should be preceded by two or more numbers of less value.
// put simply: only one number can be left of a larger number.

/* algo

Subtract the largest number from the conversion key. IF the difference is negative, can the difference be removed using only one letter?
If yes, put this letter before the letter representing the largest number.
Repeat this for all digits, i.e. for 331 -> 300, 30, 1.

300: 1000? difference of -700, cannot be fixed with only one letter.
300: 500? difference of -200, cannot be fixed with only one letter.
300: 100? difference of 200, OK, we can combine the letter C to make this. Onto the next digit.
'CCC'

30: ... 100? difference of -70, cannot be fixed with only one letter.
30: 50? difference of -20, cannot be fixed with only one letter.
30: 10? difference of 20, OK we can combine X to make this. Onto the next digit.
'CCCXXX"

1: ... 10? difference of -9, cannot.
1: 5? difference of -4, cannot.
1: 1? no difference. OK, we can just use this letter then.

CCCXXXI.

In short:
Divide the number by 1, 100, 1000, to get each separated digit representing hundreds, thousands, etc.
For each digit, starting from the largest digit:
  -Subtract each conversion number from the digit starting from the largest. If the difference is negative, and the difference can be
    represented by only one letter, combine the conversion letter and precede it by the letter representing the
    difference. Add this to the letter string.
  -if the difference is positive, divide the current digit by the conversion number. The divisor represents how many letters we should add
    of that type. Add this to the letter string.


If we add these letters starting from largest to smallest, we should be OK.

*/


class RomanNumeral {
  constructor(number) {
    this.number = number;
    this.digits = [];
    this.conversions = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
    this.conversionsOrdered = [1000, 500, 100, 50, 10, 5, 1];
    this.romanArray = [];
  }

  digitSeparator() {
    if ((this.number / 1000) >= 1) {
      this.digits.push(Math.floor(this.number/1000)*1000)
    }

    if (((this.number%1000) / 100) >= 1) {
      this.digits.push(Math.floor((this.number%1000)/100)*100)
    }

    if (((this.number%100) / 10) >= 1) {
      this.digits.push(Math.floor((this.number%100)/10)*10)
    }

    if (((this.number%10) / 1) >= 1) {
      this.digits.push(Math.floor((this.number%10)/1)*1)
    }
  }

  toRoman() {
    this.digitSeparator();

    this.digits.forEach((digit,idx) => {

      for (let idk = 0; idk < this.conversionsOrdered.length; idk += 1) {

        if ((this.digits[idx] - this.conversionsOrdered[idk]) >= 0) {
          let repetitions = this.digits[idx] / this.conversionsOrdered[idk]
          this.romanArray.push(this.conversions[this.conversionsOrdered[idk]].repeat(repetitions));
          break;
        } else if ((this.digits[idx] - this.conversionsOrdered[idk]) < 0 && Math.abs((this.digits[idx] - this.conversionsOrdered[idk])) === this.conversionsOrdered[idk+1]) {
          this.romanArray.push(this.conversions[this.conversionsOrdered[idk+1]] + this.conversions[this.conversionsOrdered[idk]])
          break
        } 
      }
    });

  }

}

let testNum = new RomanNumeral(1451);
testNum.toRoman()
console.log(testNum.digits)
console.log(testNum.romanArray)