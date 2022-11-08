// INPUT array of numbers
// INPUT array of numbers sorted

// Example
console.log(selectionSort([4,8,2,7,1,3,4])); // [1,2,3,4,4,7,8]

function selectionSort(arr) {
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        if (i !== minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}