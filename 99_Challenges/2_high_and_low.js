// con un array de numeros separados por un espacio (usar split(' '))
// buscar cual es el mayor y el menor

// INPUT array tipo string que contiene numeros separados por espacio vacio
// '5 3 2'
// OUTPUT un string que contiene de primero el MAX y luego el MIN
// '5 2'

// EXAMPLES
console.log(highAndLow("1 2 3 4 5")); // "5 1"

function highAndLow(numbers){
    let list = numbers.split(' ').map(e => Number(e));
    return `${Math.max(...list)} ${Math.min(...list)}`
}