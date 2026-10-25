const palindromes = function (str) {
  const removePunctuation = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

  const cleaned = removePunctuation(str);
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
