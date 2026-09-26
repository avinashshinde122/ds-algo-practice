/**
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */

// var isPalindrome = function (s) {
//   s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     if (s[left] != s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let leftCode = s[left].toLowerCase().charCodeAt(0);
    let rightCode = s[right].toLowerCase().charCodeAt(0);
    if (
      (97 <= leftCode && leftCode <= 122) ||
      (48 <= leftCode && leftCode <= 57)
    ) {
      if (
        (97 <= rightCode && rightCode <= 122) ||
        (48 <= rightCode && rightCode <= 57)
      ) {
        if (leftCode !== rightCode) {
          return false;
        }
        left++;
        right--;
      } else {
        right--;
      }
    } else {
      left++;
    }
  }
  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
console.log(isPalindrome("P0"));
