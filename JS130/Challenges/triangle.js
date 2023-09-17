// a program that determines the type of triangle, between equilateral, isosceles or scalene.
// equilateral = all sides same length
// isosceles = two sides same length
// scalene none of same length


// inputs: triangle sides x 3 
//      expecting number(s)
// all sides length > 0
// sum of length of any two sides must be greater than the length of third side


/* algo
a function that will accept 3 arguments which represent side lengths in the same unit of measurement
  -this function will return either 'eqilateral', 'isosceles', or 'scalene' strings when invoked
    -when invoked, the function will conduct 4 tests:
    firstly, determine if it is a triangle:
      -check if all lengths are greater than 0;
      -check if the sum of a and b are greater than c, a and c greater than b, b and c greater than a
      > if both conditions are satisfied, continue. If not, return the string 'This is not a triangle'

      - if arguments a, b, and c are all equal, it will return 'equilateral'
      - if arguments a and b are equal, but not c, it will return 'isosceles'
      - if arguments a, b, and c are all not equal, it will return 'scalene'


      Normally, I would write this as a function but, a class has been defined in the jest testing code. 
      I am not sure why we need classes in this example - it implies that we should create triangles -
      when we are only asked to determine the type of a triangle.

*/


class Triangle {
  constructor(A,B,C){
    if (A <= 0 || B <= 0 || C <= 0) {
      throw new Error()
    };

    if ( A + B <= C || A + C <= B || B + C <= A) {
      throw new Error()
    };

    this.A = A;
    this.B = B;
    this.C = C;
  }

  kind() {
    if (this.A === this.B && this.B === this.C) {
      return 'equilateral'
    } else if ((this.A === this.B && this.C !== this.B) || (this.A === this.C && this.B !== this.A) || (this.B === this.C && this.A !== this.C)) {
      return 'isosceles'
    } else {
      return 'scalene'
    }

  }
}

module.exports = Triangle;