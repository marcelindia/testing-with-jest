const sum = (a, b) => {
  if (!(a && b)) {
    return "Invalid Input";
  }
  return a + b;
};

const square = (a) => {
  if (!a) {
    return "Invalid Input";
  }
  return a * a;
};

// const cube = (a) => a * a * a;
const cube = (a) => {
  if (!a) {
    return "Invalid Input";
  }
  return a * a * a;
};
// // const cube = (a) => exponent(a, 3);
// // const exponent = (num, power = 1) => {
// //   return num ** power;
// };

module.exports = { sum, square, cube };
//Line 2
//If a and b aren't true you will get an error
