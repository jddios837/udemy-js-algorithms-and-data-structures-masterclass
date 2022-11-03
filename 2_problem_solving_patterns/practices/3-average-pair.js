//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is
// a pair of values in the array where the average of the pair equals the target average. There may be more than
// one pair that matches the average target.

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false


function averagePair(arr, avg) {
    // if array length is equal to 0 return false
    if (arr.length === 0) return false;
    // declare start and end values
    let start = 0;
    let end = arr.length - 1;
    // loop while start < end
    while (start < end) {
        // take first value and last and get average
        let newAvg = (arr[start] + arr[end]) / 2;
        // if that value is equal to avg return true
        if (newAvg === avg) return true;
        // if newAvg is more than avg add one to start
        if (newAvg > avg) {
            end--;
        } else {
            start++;
        }
        // if newAvg is less than avg reduce end in 1
    }
    // return false
    return false
}