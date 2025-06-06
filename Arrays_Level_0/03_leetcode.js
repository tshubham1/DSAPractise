// https://leetcode.com/problems/reverse-string/description/
/**
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
 */

const arr = ["h", "e", "l", "l", "o"];
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverseString(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    swap(arr, i, arr.length - 1 - i);
  }

  return arr;
}

// const arr1 = ["s", "h", "u", "b", "h", "a", "m"];
console.log(reverseString(arr));
// console.log(reverseString(arr1));

// Complexity :
// Time : O(n/2) => O(n)
// Space : O(1)
