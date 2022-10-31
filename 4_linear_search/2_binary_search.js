// Binary Search Pseudocode
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer
    // create a pointer in the middle
    // if you find the value you want, return the index
    // if the value is too small, move the left pointer up
    // if the value is too large, move the right pointer down
// If you never find the value, return -1

// implement this logic using the multipoint pattern

// INPUTS arr has to be sorted and value to be searched
// OUTPUT boolean index of the value or -1

// Examples
console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1


function binarySearch(arr, value) {
    // if (arr.length === 0) return -1;
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    //let auxArr = arr;
    while (arr[middle] !== value && start <= end) {
        //arr = arr.splice(start);
        if (arr[middle] < value) {
            start = middle + 1;
        } else {
            end = middle -1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === value){
        return middle;
    }

    return -1;
}