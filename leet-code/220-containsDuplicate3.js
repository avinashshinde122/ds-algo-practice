/*
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.

 

Example 1:

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
Example 2:

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
 

Constraints:

2 <= nums.length <= 105
-109 <= nums[i] <= 109
1 <= indexDiff <= nums.length
0 <= valueDiff <= 109
*/

const nums = [1,5,9,1,5,9]
const indexDiff = 2
const valueDiff = 3

// brute force approach
const containsAlmostDuplicate = (nums,indexDiff,valueDiff)=>{
    const numsMap= new Map();
    for (const [index,value] of nums.entries()){
        for(const [mapKey,mapValue] of numsMap){
            if(numsMap.has(mapKey) && Math.abs(mapKey-value)<=valueDiff){
                if(Math.abs(mapValue-index)<=indexDiff){
                    return true;
                }
            } 
        }
        numsMap.set(value,index);
    }
    return false;
}

/* bucket  approach
    1. create bucket using any one of the condition
    2. create dict of bucket size
    3. loop over given array, if the entry present in dict which satiesfies other condition return true

*/

var containsAlmostDuplicate1 = function(nums, indexDiff, valueDiff) {
    let bucket = new Map();
    let bucketSize = valueDiff + 1; // Bucket size is t + 1 to handle zero-indexing

    for (let i = 0; i < nums.length; i++) {
        let bucketKey = Math.floor(nums[i] / bucketSize);

        // Check if current bucket contains a number
        if (bucket.has(bucketKey)) return true;

        // Check adjacent buckets
        if (bucket.has(bucketKey - 1) && Math.abs(nums[i] - bucket.get(bucketKey - 1)) < bucketSize) return true;
        if (bucket.has(bucketKey + 1) && Math.abs(nums[i] - bucket.get(bucketKey + 1)) < bucketSize) return true;

        // Insert current number into its bucket
        bucket.set(bucketKey, nums[i]);

        console.log(bucket)
        // Maintain sliding window of size k
        if (i >= indexDiff) {
            let oldBucketKey = Math.floor(nums[i - indexDiff] / bucketSize);
            bucket.delete(oldBucketKey);
        }
    }

    return false;
};


//const res = containsAlmostDuplicate(nums,indexDiff,valueDiff)
const res2 = containsAlmostDuplicate2(nums,indexDiff,valueDiff)
console.log(res2)