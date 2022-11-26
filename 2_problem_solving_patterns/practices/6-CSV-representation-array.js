// using an input array of array the idea is transform this to only one string
// where each row will be separate for a /n before to start new row

//INPUT array of NxN
//OUTPUT string

// EXAMPLES
// INPUT
// [
//     [ 0, 1, 2, 3, 45 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]
// ]
// OUTPUT
// '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'
// if any row is empty?
// if main array is empty?
const test = [
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
]
function toCsvText(array) {
    if (array.length === 0) return '';
    // if array length == 0 return ''
    // loop first array
        // loop second array and join
    // initial idea array.map and inside execute n.join(',')
    //console.log(array.map(e => {return e.join(',')}).join('\n'));
    console.log(array.join('\n'));
    //return array.map(e => {return e.join(',')}).join('\n');

}

console.log(toCsvText(test));