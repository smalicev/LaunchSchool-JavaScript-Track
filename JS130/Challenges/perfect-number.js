let PerfectNumber = {
  classify(number) {

    if (number < 0) {
      throw new Error();
    }
    let divisors = [];

    for (let i = 0; i < number - 1; i +=1) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }

    let total = divisors.reduce((accum, currentval) => accum + currentval);

    if (total === number) {
      return 'perfect'
    } else if (total < number) {
      return 'deficient'
    } else {
      return 'abundant'
    }
  }
}

module.exports = PerfectNumber;