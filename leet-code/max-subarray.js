/**
 * [https://leetcode.com/problems/maximum-subarray/]
 * 
    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    A subarray is a contiguous part of an array.

    

    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

    Example 2:
    Input: nums = [1]
    Output: 1

    Example 3:
    Input: nums = [5,4,-1,7,8]
    Output: 23
    

    Constraints:

    1 <= nums.length <= 3 * 104
    -105 <= nums[i] <= 105

    Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 */

/**
 *
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let currentSum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

// time complexity here is O(n)

/*================================================================================*/

// ! Approch 2  devide and concure
/*
Steps:
1) devide array into 2
2) find max sum of both subarrays (use recurssion)
--> it wil fails as mid element is not included hence 3rd step needed.
3) find max sum of subarray by including mid element
4) return max of all three.
*/

const maxSumSubArrayIncludingMidElement = (arr, l, m, h) => {
  let sum = 0;
  let leftSum = -Infinity;
  for (let index = m; index >= l; index--) {
    sum = sum + arr[index];
    leftSum = Math.max(leftSum, sum);
  }

  sum = 0;
  let rightSum = -Infinity;
  for (let index = m + l; index <= h; index++) {
    sum = sum + arr[index];
    rightSum = Math.max(rightSum, sum);
  }

  return Math.max(leftSum, rightSum, leftSum + rightSum);
};

const maxSubArrayDevideAndConcur = (nums, l, h) => {
  if (l === h) return nums[l];

  // find out miidle index of array
  const m = parseInt((h - l) / 2, 10);

  console.log(m);

  Math.max(
    maxSubArrayDevideAndConcur(nums, l, m),
    maxSubArrayDevideAndConcur(nums, m + l, h),
    maxSumSubArrayIncludingMidElement(nums, l, m, h)
  );
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const startIndexOfNums = 0;
const lastIndexOfNums = nums.length - 1;

const result = maxSubArrayDevideAndConcur(
  nums,
  startIndexOfNums,
  lastIndexOfNums
);

console.log(result);

// time complexity here is O(log(n))
