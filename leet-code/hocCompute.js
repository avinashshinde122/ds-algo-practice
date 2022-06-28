// Write compute function which can take multiple arguments which will be functions and perform operations

// compute(square, addTen)(4)
// compute(mulByFour, square, addTen, factorial)(3)

//===============================================================================//

// What we understood from problem statement is, compute is a function which will take a number as argumnet
// and will return a function which will accept an differnet number of arguments

const addTen = (x) => (y) => x(y) + 10;
const addFour = (x) => (y) => x(y) + 4;

const compute = (x, y) => {
  return x(y);
};

console.log(compute(addTen, addFour)(5));
