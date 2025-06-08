// https://leetcode.com/problems/max-consecutive-ones/description/

function maxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
}

let nums = [1, 1, 0, 1, 1, 1];
console.log(maxConsecutiveOnes(nums)); // 3

// Complexity
// Time : O(n)
// Space : O(1)
