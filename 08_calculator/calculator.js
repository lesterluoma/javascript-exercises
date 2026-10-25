const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }

  return total;
};

const multiply = function (values) {
  let total = values[0];
  for (let i = 1; i < values.length; i++) {
    total *= values[i];
  }

  return total;
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (value) {
  let total = 1;

  for (let i = value; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
