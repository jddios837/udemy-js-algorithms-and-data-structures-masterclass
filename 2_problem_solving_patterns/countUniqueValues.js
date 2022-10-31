// Implement a function called countUniqueValues, which accepts a
// sorted array, and counts the unique values in the array. There
// can be negative numbers in the array, but it will always be sorted.

// in my function I'm going to recieve a sorted array,
// and I'm going to need check the quantity of number that are uniques
// on the array

// INPUT is one array sorted
// array

// OUTPUT number of unique items on the array

// EXAMPLES
console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4

function countUniqueValues(array) {
    if (array.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }

    return i + 1;
}

// function countUniqueValues(array) {
//     let counter = 0;
//     // check if array is empty and return 0 in that case
//     if (array.length === 0) {
//         return counter;
//     }
//     // for each to create an object with the number of items and count the quantity that repeats
//     frecuencyCounter = {};
//     for (let val of array) {
//         frecuencyCounter[val] = (frecuencyCounter[val] || 0) + 1;
//     }
//
//     console.log(frecuencyCounter);
//     for (let fc in frecuencyCounter) {
//         counter++;
//     }
//     // return number of attributes of that object
//
//     return counter;
// }