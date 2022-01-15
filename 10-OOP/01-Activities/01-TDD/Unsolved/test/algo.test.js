const Algo = require('../algo');

describe('Algo', () => {
  describe('reverse', () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    // it or test works
    test('should reverse a string', () => {
      const str1 = 'Hello World!';
      const str2 = '!dlroW olleH';

      const result = new Algo().reverse(str1);
      expect(result).toEqual(str2);
    });
  });

  describe('isPalindrome', () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    test('should return true if string is a palindrome', () => {
      const str1 = 'racecar';

      const result = new Algo().isPalindrome(str1);
      expect(result).toEqual(true);
    });

    test('for false if string is not palindrome', () => {
      const str1 = 'notracecar';

      const result = new Algo().isPalindrome(str1);
      expect(result).toEqual(false);
    });
  });

  describe('capitalize', () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    test('should capitalize first letter of each word in string', () => {
      const str1 = 'capitalize this sentence';
      const str2 = 'Capitalize This Sentence';

      const result = new Algo().capitalize(str1);
      expect(result).toEqual(str2);
    });
  });
});
