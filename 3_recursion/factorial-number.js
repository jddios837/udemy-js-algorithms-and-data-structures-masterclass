function getFactorial(num) {
    console.log(num);
    if (num === 1) return num;
    return num * getFactorial(num -1);
}

console.log(getFactorial(3));