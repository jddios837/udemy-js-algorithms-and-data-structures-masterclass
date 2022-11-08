// write a function where using a string in input 1 could be on the second
// string

// INPUTS string 1, string 2
// OUTPUT boolean
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
// console.log(isSubsequence('', 'acb')); // false
// console.log(isSubsequence('sdsd', '')); // false

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}