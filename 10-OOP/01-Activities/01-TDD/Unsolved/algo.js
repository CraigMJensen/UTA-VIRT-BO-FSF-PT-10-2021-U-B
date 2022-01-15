// Currently these functions are empty. As a result, all tests will fail.
function Algo() {}

Algo.prototype.reverse = function (str) {
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function (str) {
  const reverseStr = str.split('').reverse().join('');
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
};

Algo.prototype.capitalize = function (str) {
  return str
    .split(' ')
    .map((word) => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    })
    .join(' ');
};

module.exports = Algo;
