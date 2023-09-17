// Hamming distance between 2 DNA strands

// point mutation - replaces one base with another at a single nucleotide

// the hamming distances is the difference in point mutations between two homologous DNA strands

// Compute the hamming distance over the shorter length if strands have different lengths


/* algo

create a DNA class
  - DNA must be composed of letters G,A,T,C
  - will assume all inputs are like this


with a hammingDistance method, compare current objects DNA strand to the strand passed to the method
  -this method compares the smaller of the two strands (does not compare past the length of the smaller strand)
  -compare each letter at each index for each string. if it doesnt equal, add to the distance counter

*/


class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand) {
    let shorterStrand;
    let longerStrand;
    let distance = 0;

    if (strand.length >= this.strand.length) {
      shorterStrand = this.strand;
      longerStrand = strand;
    } else {
      shorterStrand = strand;
      longerStrand = this.strand;
    };

    shorterStrand.split('').forEach((letter,idx) => {
      if (shorterStrand[idx] !== longerStrand[idx]) {
        distance += 1;
      };
    });

    return distance;
  }

}

module.exports = DNA;