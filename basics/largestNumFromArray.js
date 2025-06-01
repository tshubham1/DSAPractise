const arr = [1, 2, 3, 4, 5, 6]

function largestNumber(arr){
    // let largest = arr[0]
    let largest = -Infinity

    for ( const num of arr){
        if(num > largest){
            largest = num
        }
    }
    return largest;
}

const result = largestNumber(arr)
console.log(result);
