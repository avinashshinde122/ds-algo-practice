/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

https://leetcode.com/problems/longest-common-prefix/description/?envType=problem-list-v2&envId=string
 * 
 * 
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

// var longestCommonPrefix = function (strs) {
//   let res = "";
//   let lI = 0;

//   while (lI < strs[0].length) {
//     let wI = 1;
//     let same = true;
//     while (wI < strs.length) {
//       if (strs[0][lI] === strs[wI][lI]) {
//         wI++;
//       } else {
//         same = false;
//         return res;
//       }
//     }
//     if (same) {
//       res = res + strs[0][lI];
//     }
//     lI++;
//   }
//   return res;
// };

// var longestCommonPrefix = function (strs) {
//   let sortedStrs = strs.sort();
//   let res = "";
//   let lIndex = 0;
//   while (lIndex < sortedStrs[0].length) {
//     if (sortedStrs[0][lIndex] === sortedStrs[sortedStrs.length - 1][lIndex]) {
//       res = res + sortedStrs[0][lIndex];
//       lIndex++;
//     } else {
//       break;
//     }
//   }
//   return res;
// };

var longestCommonPrefix = function (strs) {
  let result = strs[0];
  let resultLength = result.length;

  for (let i = 1; i < strs.length; i++) {
    while (result !== strs[i].substring(0, resultLength)) {
      resultLength--;
      if (resultLength == 0) {
        return "";
      }
      result = result.substring(0, resultLength);
    }
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "floght", "flome"]));
