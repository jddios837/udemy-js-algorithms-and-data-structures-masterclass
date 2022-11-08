
console.log(insertionSort([7,3,2,5,1])); // [1,2,3,5,7]

function insertionSort(arr) {
    let index = 0;
    for(let i = 1; i < arr.length; i++) {
        if (arr[index] > arr[i]) {
            let temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}