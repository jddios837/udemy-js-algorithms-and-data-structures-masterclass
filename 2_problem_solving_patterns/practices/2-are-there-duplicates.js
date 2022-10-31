//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether
// there are any duplicates among the arguments passed in.  You can solve this using the frequency
// counter pattern OR the multiple pointers pattern.

// it is a function that detect if exist duplicates values in arguments of the function input
// this will return true

// INPUT array of arguments
// OUTPUT boolean

// Examples
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(3, 2, 1)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

function areThereDuplicates(...args) {
    let i = 0;
    for (let k = 0; k < args.length; k++) {
        if (i !== k) {
            if (args[i] === args[k]) {
                return true;
            }
        }
        if (k === args.length - 1) {
            k = 0;
            i++;
        }
        if (i === args.length -1) {
            return false;
        }
    }

    return false
}

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }