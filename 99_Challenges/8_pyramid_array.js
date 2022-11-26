// Write a function that when given a number >= 0,
//     returns an Array of ascending length subarrays.

// INPUT Number n
// OUTPUT Array of Arrays
// Examples
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

function pyramid(n) {
    // declare a new array
    let arr = [];
    // loop while i less equal than n
    for(i = 1; i <= n; i++) {
        // declare an inner array
        let innerArr = [];
        // loop while j is less equal than i
        for (j = 1; j <= i; j++) {
            // push 1 on the inner array
            innerArr.push(1);
        }
        // push inner array in new array
        arr.push(innerArr);
    }

    return arr;
}

// OTHER SOLUTIONS
// function pyramid(n) {
//     return Array(n).fill().map((e,i)=>Array(i+1).fill(1))
// }
// Array(N) let create a array with N numbers of elements


console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));

console.log('Values');

