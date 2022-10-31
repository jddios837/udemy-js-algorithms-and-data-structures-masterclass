// Write a function called sameFrequency. Given two positive integers, find out if the two numbers
// have the same frequency of digits

// check if exist same quantity of numbers on each input value and return true if match
// and false if are not equal

// INPUTS num1 int and num2 int
// OUTPUTS boolean

// Examples
//sameFrequency(182,281) // true
//sameFrequency(34,14) // false
console.log(sameFrequency(123, 5879385)) // true
console.log(sameFrequency(22,222)) // false
console.log(sameFrequency(0,0)) // true
console.log(sameFrequency('234',0)) // false

function sameFrequency(num1, num2) {
    // check if are number if not return false
    // convert numbers in strings
    // check frequency in each value and create a new object with this count
    let freqNum1 = {};
    const numString1 = num1.toString();
    for (let num1Key of numString1) {
        freqNum1[num1Key] = (freqNum1[num1Key] || 0) + 1;
    }

    let freqNum2 = {};
    const numString2 = num2.toString();
    for (let num2Key of numString2) {
        freqNum2[num2Key] = (freqNum2[num2Key] || 0) + 1;
    }
    // loop in freq1
        // check freq1[key] !== freq2[key] return false
    return JSON.stringify(freqNum1) === JSON.stringify(freqNum2);
}