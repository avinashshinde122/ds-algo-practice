/**
 * 
 * You are given a 1-indexed array of integers numbers that is already sorted in non-decreasing order.

Find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers index1 and index2 as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
 * 
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// brute-force approach - not accespted due to time complexity

// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
// };

// using hash map-- accepted

// var twoSum = function (numbers, target) {
//   let map = new Map();
//   for (let i = 0; i < numbers.length; i++) {
//     if (!map.has(target - numbers[i])) {
//       map.set(numbers[i], i + 1);
//     } else {
//       return [map.get(target - numbers[i]), i + 1];
//     }
//   }
// };

// two - pointer approach - most efficient
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (target < numbers[left] + numbers[right]) {
      right--;
    } else if (target > numbers[left] + numbers[right]) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
};

// console.log(twoSum([-1, 0], -1));

console.log(twoSum([2, 7, 11, 15], 9));
