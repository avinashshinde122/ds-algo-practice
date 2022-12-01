// https://leetcode.com/problems/4sum/

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// const isArrayEqual = (arr1, arr2) => {
//   arr1.forEach((e) => {
//     if (arr2.indexOf(e) !== -1) {
//       arr2.splice(arr2.indexOf(e), 1);
//     }
//   });
//   return arr2.length === 0;
// };

// const calculate4Sum = (nums, target) => {
//   const loopSize = nums.length - 3;
//   const result = [];
//   for (let i = 0; i < loopSize; i++) {
//     for (let j = i + 1; j < loopSize + 1; j++) {
//       for (let k = j + 1; k < loopSize + 2; k++) {
//         for (let l = k + 1; l < loopSize + 3; l++) {
//           if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
//             if (result.length === 0) {
//               result.push([nums[i], nums[j], nums[k], nums[l]]);
//             } else {
//               const isUnique = result.every(
//                 (res) =>
//                   !isArrayEqual(res, [nums[i], nums[j], nums[k], nums[l]])
//               );
//               if (isUnique) result.push([nums[i], nums[j], nums[k], nums[l]]);
//             }
//           }
//         }
//       }
//     }
//   }
//   return result;
// };

// const array = [1, 0, -1, 0, -2, 2]; // [2, 2, 2, 2, 2];
// const target = 0; //8;
// const start = Date.now();
// const result = calculate4Sum(array, target);
// console.log(result);
// console.log(Date.now() - start);

// console.log(isArrayEqual([-3, 0, 1, 2], [-3, 0, 1, 2]));

const calculate4Sum = (nums, target) => {
  const sortedArray = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedArray.length - 3; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < sortedArray.length - 2; j++) {
      if (j > i + 1 && sortedArray[j] === sortedArray[j - 1]) {
        continue;
      }
      let start = j + 1;
      let end = sortedArray.length - 1;

      while (start < end) {
        const sum =
          sortedArray[i] +
          sortedArray[j] +
          sortedArray[start] +
          sortedArray[end];
        if (sum === target) {
          result.push([
            sortedArray[i],
            sortedArray[j],
            sortedArray[start],
            sortedArray[end],
          ]);
          do {
            start++;
          } while (sortedArray[start] === sortedArray[start - 1]);
          do {
            end--;
          } while (sortedArray[end] === sortedArray[end + 1]);
        } else if (sum < target) {
          start++;
        } else {
          end--;
        }
      }
    }
  }

  return result;
};

const array = [-2, -1, -1, 1, 1, 2, 2]; // [2, 2, 2, 2, 2];
const target = 0; //8;
const start = Date.now();
const result = calculate4Sum(array, target);
console.log(result);
console.log(Date.now() - start);
