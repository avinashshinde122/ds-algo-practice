/**
 * Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 * 
 *  
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function (a, b) {
//   let maxLen = Math.max(a.length, b.length);
//   let res = "";
//   let carry = 0;
//   let iA = a.length - 1;
//   let iB = b.length - 1;
//   for (let i = maxLen; i > 0; i--) {
//     let iAint = Number(a[iA] ?? "0");
//     let iBint = Number(b[iB] ?? "0");
//     res = ((iAint + iBint + carry) % 2) + res;
//     carry = Math.floor((iAint + iBint + carry) / 2);
//     iA--;
//     iB--;
//     console.log({ iAint, iBint, res, carry });
//   }
//   return carry ? carry + res : res;
// };

var addBinary = function (a, b) {
  let aInt = BigInt(`0b${a}`);
  let bInt = BigInt(`0b${b}`);
  let add = aInt + bInt;
  let res = add.toString(2);
  return res;
  //   console.log({ aInt, bInt, add, res });
};

console.log(addBinary("11", "1"));
