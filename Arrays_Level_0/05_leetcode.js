// https://leetcode.com/problems/merge-sorted-array/description/
/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

// Approach 1 : Brute Force
/*
function mergeSortedArray(nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }

  nums1.sort((a, b) => a - b);
  return nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(mergeSortedArray(nums1, m, nums2, n)); // [ 1, 2, 2, 3, 5, 6 ]

// Complexity :
// Time : O((m + n) log (m + n)) due to sorting
// space : O(1)
*/
// Approach 2 :
/*
function mergeSortedArray(nums1, m, nums2, n) {
  // create a copy of nums1 array
  let nums1Copy = nums1.splice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    // p2 >= n : if my p2 is greater than n that means its exhausted and nothing left
    //  in that array hence only focus on p1
    // p1 < m : do p1++ until its less than my array length
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(mergeSortedArray(nums1, m, nums2, n)); // [ 1, 2, 2, 3, 5, 6 ]

// Complexity :
// Time : O(m+n)
// Space : O(m)
*/

// Approach - 3 :

function mergeSortedArray(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break; // here nums1 will be having sorted array if p2 is exhausted

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(mergeSortedArray(nums1, m, nums2, n)); // [ 1, 2, 2, 3, 5, 6 ]

// Complexity :
// Time : O(m + n)
// Space : O(1) : without using extra space
