/**
 * [https://leetcode.com/problems/plus-one/]
 * 
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

    Increment the large integer by one and return the resulting array of digits.

    

    Example 1:

    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].
    Example 2:

    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.
    Incrementing by one gives 4321 + 1 = 4322.
    Thus, the result should be [4,3,2,2].
    Example 3:

    Input: digits = [0]
    Output: [1]
    Explanation: The array represents the integer 0.
    Incrementing by one gives 0 + 1 = 1.
    Thus, the result should be [1].
    Example 4:

    Input: digits = [9]
    Output: [1,0]
    Explanation: The array represents the integer 9.
    Incrementing by one gives 9 + 1 = 10.
    Thus, the result should be [1,0].
    

    Constraints:

    1 <= digits.length <= 100
    0 <= digits[i] <= 9
    digits does not contain any leading 0's.
 * 
 */

/**
 *
 * @param digits [numbers]
 * @return [numbers]
 */
const plusOne = (digits) => {
  let carry = 0;
  for (let i = digits.length - 1; i > -1; i--) {
    const temp =
      i === digits.length - 1 ? digits[i] + carry + 1 : digits[i] + carry;
    digits[i] = temp % 10;
    carry = Math.floor(temp / 10);
  }
  if (carry === 1) {
    digits.splice(0, 0, 1);
  }
  return digits;
};

const digits = [9, 9, 9];
console.log(plusOne(digits));

/**
 * An alternate approach to solve above problem by using BigInt to convert a long string into number.
 * paserInt only supports less than (2^53 - 1) and more than -( (2^53 - 1))
 * @param [number] digits
 * @returns [number]
 */
const plusOneAlternate = (digits) => {
  const str = digits.join().replaceAll(",", "");
  const number = BigInt(str) + 1;
  const arr = number.toString().split("");
  const arr2 = arr.map((n) => parseInt(n));
  return arr2;
};
