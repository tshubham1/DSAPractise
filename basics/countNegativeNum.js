// Write a function that returns the number of negative numbers in an array.

/**
 * Input: arr = [2, -6, 4, 8, 1, -9]
    Output: 2
 */

const arr = [2, -6, 4, 8, 1, -9]

function countNegativeNum(arr){
    let countNegative = 0
    for(const num of arr){

        if (num < 0) countNegative++
    }
    console.log(`Count of Negative number in array : ${countNegative}`);
    
}

countNegativeNum(arr)

// output : 
// Count of Negative number in array : 2

// Time and space complexity : 
//  Time complexity : O(n) - n is number of elements in array
//  Space complexity : O(1) - only a counter variable is used.