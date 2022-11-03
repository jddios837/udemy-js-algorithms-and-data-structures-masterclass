// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all
// values flattened.

// In each item of the array, will be an array so each element will be concat to only one array

// Inputs and array of arrays of integers
// Output an array with all the numbers

// Examples
console.log(flatten([2,3,[4, 5, 8] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]]); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

function flatten(oldArr){
    var newArr = []
    for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}