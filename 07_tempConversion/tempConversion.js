const convertToCelsius = function (temp) {
  // (32°F − 32) × 5/9 = 0°C
  let result = (temp - 32) * (5 / 9);

  return Number(result.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  // (0°C × 9/5) + 32 = 32°F
  let result = temp * (9 / 5) + 32;

  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
