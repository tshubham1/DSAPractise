// https://leetcode.com/problems/remove-element/description/

/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
 */

const arr = [3, 2, 2, 8, 4, 7];
const value = 2;
function removeElement(arr) {
  let x = 0; // pointer for shifting the element to the left

  for (let i = 0; i < arr.length; i++) {
    // shift elements to left if its not equal to value
    if (arr[i] !== value) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

console.log(removeElement(arr)); // 4 elements

// DRY RUN

/**
 * inputs : nums = [0,1,2,2,3,0,4,2], val = 2
 * x = 0
 *
 * i = 0 --> nums[0] = 0 != 2 -> nums[0] = 0, x = 1
 * i = 1 --> nums[1] = 1 != 2 -> nums[1] = 1, x = 2
 * i = 2 --> nums[2] = 2 == 2 --> skip
 * i = 3 --> nums[3] = 2 == 2 ---> skip
 * i = 4 ---> nums[4] = 3 != 2 --> nums[2] = 3, x = 3
 * i = 5 --> nums[5] = 0 != 2 --> nums[3] = 0, x = 4
 * i = 6 --> nums[6] = 4 != 2 --> nums[4] = 4, x = 5
 * i = 7 --> nums[7] = 2 == 2 --> skip
 *
 * Result: k = 5, nums = [0,1,3,0,4,...]
 *
 * Complexity :
 *
 * time : O(n)
 * space : O(1)
 */
