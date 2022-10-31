// Linear Search
// this function accepts an array and a value
// loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is fount
// If the value is never found, return -1

// build a function that recive an array and a value, if that value exist on the array return the position
// where was found else return -1

// INPUTS arr = array and value. Could inputs be string or numbers?
// OUTPUT int value, it could be int disting of -1 if we found or -1 if we won't found that value on the array

// Examples
console.log(indexSearch([2,5,3,2,6,4], 10)) // -1
console.log(indexSearch([2,5,3,2,6,4], 5)) // 1
console.log(indexSearch(['tom','maria','pedro','pablo','jesus','luis'], 5)) // -1
console.log(indexSearch(['tom','maria','pedro','pablo','jesus','luis'], 'pablo')) // 3
console.log(indexSearch([], 'pablo')) // -1

function indexSearch(arr, value) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === value) return j;
    }
    return -1;
}

