//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// INPUT array of strings
// OUTPUT array of string but reverse

// Examples
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

function reverse(arr) {
    if (arr.length === 0) return [];
    let val = arr[arr.length - 1];
    return val.concat(reverse(arr.substring(0, arr.length - 1)));
}