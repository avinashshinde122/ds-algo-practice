/**
 * 
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 * 
 * 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map = new Map();
  let newSet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i]) && !newSet.has(t[i])) {
      map.set(s[i], t[i]);
      newSet.add(t[i]);
    } else if (map.has(s[i]) && map.get(s[i]) === t[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic("badc", "baba"));
// console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
