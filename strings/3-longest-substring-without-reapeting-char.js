/**
 * 
 * Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 105
s consists of English letters, digits, symbols and spaces.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left = left + 1;
    }
    set.add(s[right]);
    right = right + 1;
    maxLen = Math.max(maxLen, set.size);
  }
  return maxLen;
};

//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
//console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("p"));
