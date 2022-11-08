// buscar los 2 numeros mas peque#os del array de numeros y sumarlos

// INPUT array de numeros enteros
// OUTPUT entero con el resultado de la suma

// Examples
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455
function sumTwoSmallestNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        sum += Math.min(...numbers);
        numbers.splice(numbers.indexOf(Math.min(...numbers)),1)
    }
    return sum;
}