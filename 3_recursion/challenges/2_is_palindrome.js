//Write a recursive function called isPalindrome which returns true if the string passed to it is a
// palindrome (reads the same forward and backward). Otherwise it returns false.

// INPUT array of char (is a string)
// OUTPUT boolean

//EXAMPLES
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

function isPalindrome(arr) {
    if (arr.length === 1) {
        return true
    }

    let start = arr[0];
    let end = arr[arr.length - 1];
    if (start !== end) {
        return false
    }

    return isPalindrome(arr.substring(1,arr.length - 1));
}

