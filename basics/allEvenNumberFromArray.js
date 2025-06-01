const arr = [1, 2, 3, 4, 5, 6]

function isEven(arr){

    for (const num of arr){
        if (num % 2 == 0){
            console.log(`Number ${num} is Even Number`);
        }
    }
}

// test the function

isEven(arr)