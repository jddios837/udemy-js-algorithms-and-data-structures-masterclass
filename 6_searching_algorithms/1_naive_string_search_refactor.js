// INPUTS str1 and str2
// OUTPUT number where string math

// Examples
console.log(stringSearch("wowomgzomg", "omg"));
console.log(stringSearch("yo soy un hombre con un corazon grande y un amor hermoso", "un"));
console.log(stringSearch("sdfgdgfdgrsfasdfwerewrrtry", "test"));


function stringSearch(str1, str2) {
    let counter = 0;

    for (let i = 0; i <= str1.length - 1; i++) {
        if (str1[i] === str2[0]) {
            for (let j = 0; j <= str2.length - 1; j++) {
                if (str1[i + j] !== str2[j]) break;
                if (((i + j) - i) === str2.length - 1) counter++;
            }
        }
    }

    return counter;
}