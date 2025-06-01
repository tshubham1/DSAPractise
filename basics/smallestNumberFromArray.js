// Write a function that returns the smallest number in an array.
/**
 *  Input: arr = [2, -6, 4, 8, 1, -9]
    Output: -9
 * 
 */

const arr = [2, -6, 4, 8, 1, -9]

function smallestNumberFromArray(arr){
    let smallest = arr[0];

    for (const num of arr){
        if (num < smallest) {
            smallest = num
        }
    }
    return `Smallest Number from Array : ${smallest}`
}

// Test the function
console.log(smallestNumberFromArray(arr));

/**
 * o/p : Smallest Number from Array : -9
 * Time complexity : O(n) - n is number of element in the array
 * Space complexity : O(1) - only one variable is used.
 * 
 * 
 */
