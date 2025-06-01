// WAF that searches for an element in an array and return the index,
// if the element is not present then return -1

const arr = [5, 6, 7, 8, 9]

function searchElementInArray(arr, element){

    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] == element){
            return i;
        }
    }
    return -1
}

console.log(searchElementInArray(arr, 7));