// https://leetcode.com/problems/longest-palindromic-substring/
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return "";
  else if (s.length === 1) return s;
  else {
    let longest = "";

    for (var i = 0; i < s.length; i++) {
      let oddPalindrome = expandFromCentre(s, i, i);
      let evenPalindrome = expandFromCentre(s, i - 1, i);

      if (oddPalindrome.length > longest.length) longest = oddPalindrome;
      if (evenPalindrome.length > longest.length) longest = evenPalindrome;
    }
    return longest;
  }
};

const expandFromCentre = (str, left, right) => {
  let i = 0;
  while (str[left - i] && str[right + i] && str[left - i] === str[right + i]) {
    i++;
  }
  i--;
  return str.slice(left - i, right + i + 1);
};
const ss = "babad";
console.log(`${ss}=>  ${longestPalindrome(ss)}`);
