// Write a function called same, which accepts two arrays. the function should return true if every value in the
// array has its corresponding value squared in the second array. The frequency of values must be the same.

// compare two arrays and check is any element on the first exist in the second but squared
// but check the frequency of it in the second array

// Inputs array1 and array2 has to be only numbers
// Output has to be a boolean

// checking some examples
// same([1,2,3], [4,1,9]); // true
// same([1,2,3], [1,9]); // false
// same([1,2,1], [4,4,1]); // false

// validation that arrays have not to be empties
// same([1,2,1], []); // false
// same([], [4,4,1]); // false
// same([], []); // false

// validate that any value is a string
// same(['1','hola','2'], ['test1', 'test2']); // false


// function same(arr1, arr2) {
//     // previous input validation
//     // if arr1 or arr2 is empty return false
//     if (arr1.length === 0 || arr2.length === 0) {
//         return false
//     }
//     // if arr1 or arr2 contain any string return false
//
//     // Loop on the arr1
//     let checkExist = false;
//     for (let i = 0; i < arr1.length; i++) {
//         // get the square value of the first element on the arr1
//         let arr2SquareValue = arr1[i] * arr1[i];
//         // find on the arr2 if that values exist
//         checkExist = false;
//         for (let j = 0; j < arr2.length; j++) {
//             // if exist that value go for the next value
//             if (arr2[j] === arr2SquareValue) {
//                 checkExist = true;
//             }
//         }
//         // else return false and finish the loop
//         if (!checkExist) {
//             return false;
//         }
//     }
//
//     return true;
// }

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    if (arr1.length === 0 || arr2.length === 0) {
        return false
    }

    // check if length are equal but have strings values
    for (let i = 0; i < arr1; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(same([], [1,2,3]));
console.log(same([], []));
console.log(same([1,2,3], []));
console.log(same([1,2,3], [1,4,9]));