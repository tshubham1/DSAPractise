// https://leetcode.com/problems/missing-number/description/

/*
function missingNumber(nums) {
  // sorting the array
  nums.sort((a, b) => a - b);

  if (nums[0] !== 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      return nums[i - 1] + 1;
    }
  }

  return nums.length;
}

let nums = [4, 2, 1, 0, 5];
console.log(missingNumber(nums));

// Complexity :
// Time : O(nlog(n))
// Space : O(1)

*/

// Approach - 2 : Optimal
function missingNumber(nums) {
  let n = nums.length;
  // Calculating the sum till n numbers
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;

  // calculating the partialSum for elements present in array
  for (let i = 0; i < nums.length; i++) {
    partialSum += nums[i];
  }
  // return total - partial = missing number
  return totalSum - partialSum;
}

let nums = [3, 0, 1];

console.log(missingNumber(nums)); // 2

// Complexity :
// Time : O(n)
// Space : O(1)
