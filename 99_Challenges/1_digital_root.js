// function recieve a number if the length of the number has more than one digit
// you need to reduce it until a single digit

// INPUT number
// OUTPUT number

// EXAMPLES
console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6

function digitalRoot(number) {
    let sum = 0;
    number.toString().split('').map(e => sum += parseInt(e));

    if (sum.toString().length > 1) {
        return digitalRoot(sum);
    } else {
        return sum;
    }
}