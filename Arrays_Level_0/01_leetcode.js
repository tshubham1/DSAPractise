// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
/**

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k

 */

// Logic : Using two pointer approach
//  x = this pointer will handle my unique elements
//  i = this pointer will iterate over array

function removeDuplicates(arr) {
  let x = 0; // pointer for unique elements

  for (let i = 0; i < arr.length; i++) {
    // if the current value of i > x value in array
    if (arr[i] > arr[x]) {
      // shift my x with 1 to the right for next comparison
      x = x + 1;
      // assign i value to x
      arr[x] = arr[i];
    }
  }
  return x + 1; // return number of unique elements x is index so total = index + 1
}

let arr = [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4];

console.log(removeDuplicates(arr));

/**
 *  returned array : [0, 1, 2, 3, 4,2, 2, 3, 3, 3,4];
 *  number of unique elements : 5 i.e [0, 1, 2, 3, 4]
 *
 */

// DRY RUN [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
/**
 *      i | x |
 *      0| 0 | no change to value of x as arr[i] is not greater than arr[x]
 *      1| 0| no change
 *      2| 1| Yes --> I found my 2nd unique element,
 *                      1st thing : x --> x + 1 : to store new value
 *                      2nd thing : arr[x] = arr[i] --> arr[1] = arr[2]
 *      3| 1| no change
 *      4| 1 | no change
 *      ------
 *
 *
 */


// Time Complexity : O(n)
// Space Complexity : O(1)
