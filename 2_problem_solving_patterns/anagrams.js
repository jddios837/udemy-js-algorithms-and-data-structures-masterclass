// ANAGRAMS
// given two string, write a function to determine if the second string is an anagram of the first. An anagram is a word
// phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.


// with two inputs arrays I need to compare arr1 with arr2 and check if the same letters in arr1 exist in arr2
// if that is true them is an anagram

// INPUTS are array
// arr1
// arr2

// OUTPUT bool value

// EXAMPLES
// console.log(validAnagram('','')); // true
// console.log(validAnagram('aaz','zza')); // false
// console.log(validAnagram('rat','car')); // false
// console.log(validAnagram('qwerty','qeywrt')); // true
// console.log(validAnagram(0,1)); // false check if they are strings


function validAnagram(array1, array2) {
    // check if they have same length of values if not return false
    if (array1.length !== array2.length) {
        return false;
    }
    // convert array 1 in object with frequency counter
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of array1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // convert array 2 in object with frequency counter
    for (let val of array2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // loop throw array 1 object
    for (let key in frequencyCounter1) {
        // if key exist in frequency counter in object 2
        if (!(key in frequencyCounter2)){
            return false;
        }
        // if value in frequency1 is different in frequency2 return false
        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('','')); // true
console.log(validAnagram('aaz','zza')); // false
console.log(validAnagram('rat','car')); // false
console.log(validAnagram('qwerty','qeywrt')); // true
