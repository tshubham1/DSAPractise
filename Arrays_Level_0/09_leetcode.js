// https://leetcode.com/problems/single-number/description/

/*
// Approach -1 : Optimal but with extra space

function findSingleNumber(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) return nums[i];
  }
}

let nums = [2, 2, 1];

console.log(findSingleNumber(nums)); // 1
// Complexity :
// Time : O(n)
// Space : O(n)
*/

// Approach - 2: without using extra space

// Using bitwise XOR :
/**
 *   a XOR 0 ==> a
 *   a XOR a ==> 0
 *   b XOR b ===> 0
 *   duplicate element with XOR return 0
 */

function findSingleNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

let nums = [2, 2, 1, 4, 1];

console.log(findSingleNumber(nums)); // 4

// Complexity :
// Time : O(n)
// Space : O(1)
