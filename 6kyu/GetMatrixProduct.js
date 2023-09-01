// In mathematics, a matrix (plural matrices) is a rectangular array of numbers. Matrices have many applications in programming, from performing transformations in 2D space to machine learning.

// One of the most useful operations to perform on matrices is matrix multiplication, which takes a pair of matrices and produces another matrix – known as the dot product. Multiplying matrices is very different to multiplying real numbers, and follows its own set of rules.

// Unlike multiplying real numbers, multiplying matrices is non-commutative: in other words, multiplying matrix a by matrix b will not give the same result as multiplying matrix b by matrix a.

// Additionally, not all pairs of matrix can be multiplied. For two matrices to be multipliable, the number of columns in matrix a must match the number of rows in matrix b.

// There are many introductions to matrix multiplication online, including at Khan Academy, and in the classic MIT lecture series by Herbert Gross.

// To complete this kata, write a function that takes two matrices - a and b - and returns the dot product of those matrices. If the matrices cannot be multiplied, return null/None/Nothing or similar.

// Each matrix will be represented by a two-dimensional list (a list of lists). Each inner list will contain one or more numbers, representing a row in the matrix.

// For example, the following matrix:

// |1 2|
// |3 4|

// Would be represented as:

// [[1, 2], [3, 4]]

// It can be assumed that all lists will be valid matrices, composed of lists with equal numbers of elements, and which contain only numbers. The numbers may include integers and/or decimal points.

function getMatrixProduct(a, b) {
  //If a and b can be multiplied, returns the product of a and b as a two-dimensional array. Otherwise returns null.

  console.log(a);
  console.log(b);
  console.log("Start --");

  // When multiplying a matrix by a matrix,
  // the number of columns in the first matrix must equal the number of rows in the second matrix,
  // otherwise the operation cannot be defined.
  if (a.length > 0 && b.length > 0) {
    if (a[0].length !== b.length) {
      console.log(`Cannot calculated : ${a[0].length} x ${b.length}`);
      return null;
    }
  }

  console.log(`Lets calculate matrix of : ${a[0].length} x ${b.length}`);

  let outputArr = [];

  for (let i = 0; i < a.length; i++) {
    let calcArr = [];

    for (let j = 0; j < b[0].length; j++) {
      let calc2Arr = 0;

      //console.log (`number of elements in b : ${b[0].length}`)

      for (let k = 0; k < a[0].length; k++) {
        console.log(a[i][k], b[k][j]);
        calc2Arr += a[i][k] * b[k][j];
        //console.log (calc2Arr);
      }

      console.log(calc2Arr);
      calcArr[j] = calc2Arr;
    }

    console.log(calcArr);
    outputArr[i] = calcArr;
    console.log(outputArr);
  }

  console.log(outputArr);
  console.log(` Done with output matrix elements : ${outputArr.length}`);

  return outputArr;
}
