// INPUT array of numbers
// OUTPUT array of numbers sorted

// Examples
console.log(bubbleSort([2,8,3,4,5,3])); // 2, 3, 3, 4, 5, 8
//console.log(bubbleSort([])); // []

function swap(arr, indx1, indx2) {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

function bubbleSort(arr) {
    // if array length is 0 return an empty array
    if (arr.length === 0) return [];
    // loop in array with a for and an i
    for (let i = arr.length; i > 0 ; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1], i, j);
            if (arr[j] > arr[j + 1]) {
                swap(arr,j, (j + 1));
            }
        }
        console.log('ONE PASS COMPLETE!');
    }
        // loop with j from the beginning until i - 1
        // if arr[j] is greater than arr[j+1], swap those two values!
    // return the sorted array
    return arr;
}
