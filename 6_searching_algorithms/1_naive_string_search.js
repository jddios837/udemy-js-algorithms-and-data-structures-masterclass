// INPUTS str1 and str2
// OUTPUT number where string math

// Examples
console.log(stringSearch("wowomgzomg", "omg"));
console.log(stringSearch("yo soy un hombre con un corazon grande y un amor hermoso", "un"));
console.log(stringSearch("asdfdsgfdsgfdsgsfefee", "test"));


function stringSearch(str1, str2) {
    // declare start of string one (pointer1)
    let pointer1 = 0;
    // declare length of string two
    let str2_length = str2.length - 1;
    // declare counter with initial value in 0;
    let counter = 0;
    // loop while pointer1 less than string 1
    while (pointer1 <= str1.length - 1) {
        // if str1[pointer1] === str2[0]
        if (str1[pointer1] === str2[0]) {
            // create a start of string two (pointer2)
            let pointer2 = 0;
            // declare a band called match = true
            let matchBand = true;
            // declare a subPointer1 = pointer1
            let subPointer1 = pointer1;
            // loop while pointer2 <= str2.length - 1 and match is true
            while (pointer2 <= str2.length - 1 && matchBand) {

                // if str1[subPointer1] !== str2[pointer2]
                if (str1[subPointer1] !== str2[pointer2]) {
                    // match become in false
                    matchBand = false;
                }
                // if (subPointer1 - pointer1) === (str2.length - 1) then counter will increase in one
                if ((subPointer1 - pointer1) === str2_length) {
                    counter++;
                }
                // increase subPointer1 in 1
                subPointer1++;
                // increase pointer2 in 1
                pointer2++;
            }
        }
        // pointer1++;
        pointer1++;
    }

    return counter;
}