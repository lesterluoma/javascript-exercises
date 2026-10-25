const fibonacci = function (num) {
  let count = Number(num);

  if (count == 0) return 0;
  if (count < 0) return "OOPS";

  let number = 1;
  let previousNumber = 0;

  for (let i = 2; i <= count; i++) {
    let sum = number + previousNumber;
    previousNumber = number;
    number = sum;
  }

  return number;
};

// Do not edit below this line
module.exports = fibonacci;
