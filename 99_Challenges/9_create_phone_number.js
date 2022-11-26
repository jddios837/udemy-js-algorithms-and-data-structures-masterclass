// Write a function that accepts an array of 10 integers
// (between 0 and 9), that returns a string of those numbers in
// the form of a phone number.

// INPUT array of numbers between 0 - 9
// OUTPUT string

//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// if array has less than 10 or more than 10 items return undefined
// validate that each item is a number if not return undefined?

function createPhoneNumber(numbers) {
    let count = 0;
    return "(***) ***-****".split('').map((e,i) => {
        if (e === '*') {
            e = numbers[count];
            count++;
        }
        return e;
    }).join('');
}

// OTHE SOLUTION
// function createPhoneNumber(numbers){
//     return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))