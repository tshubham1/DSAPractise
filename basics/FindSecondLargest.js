// Find the 2nd largest number from array

const arr = [2, 3, 55, 34, 27, 9, 90, 90];

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  // Logic is if I got new firstLargest then old value of firstLargest
  // become new value for secondLargest.
  // Hence first pass the value to secondLargest and then assign new value to
  // firstLargest

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];

      // Here handling corner case for duplicate elements in a array
      // my secondLargest should not be equal to my firstLargest
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// test the function

const secondLargest = findSecondLargest(arr);
console.log(secondLargest);

/**
 *  Corner Cases :
 * 1) Array is empty
 * 2) Array has negative numbers
 * 3) Array has duplicate
 *
 *
 */
