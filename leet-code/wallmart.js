// Given an integer array nums where every element appears three times except for one, which appears exactly once.
//  Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

// const oddManOut = (arr) => {
//   const newMap = new Map();
//   let output = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (newMap.has(arr[i])) {
//       newMap.set(arr[i], newMap.get(arr[i]) + 1);
//     } else {
//       output = arr[i];
//       newMap.set(arr[i], 1);
//     }
//   }
//   return output;
// };

// console.log(oddManOut([0, 1, 0, 1, 0, 1, 99]));

//weakmap

//set

// Given an array of numbers, find the largest duplicate number.
// I/p: [1,7,1,3,1,3]; o/p: 3

// const largestDuplicate = (arr) => {
//   let output = -1;
//   const newMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (newMap.has(arr[i])) {
//       newMap.set(arr[i], 1);
//       output = Math.max(output, arr[i]);
//     } else {
//       newMap.set(arr[i], 0);
//     }
//   }
//   return output;
// };

// console.log(largestDuplicate([1, 2, 4, 3, 6, -8]));

// How do you print the first non repeated character of the string - eg. “amalgamationtjkul” - l is the first non repeating letter

// lowercase

// output == str[0]
// repeated (set):  a m
// non repeated (arr) :   l g t i o n t
