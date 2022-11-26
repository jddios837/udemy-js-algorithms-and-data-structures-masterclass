
const s = "abcd";
const t = "ceadb";

// INPUT s is t string with a random letter added in any position
// INPUT t is a random string generate
function randomShuffling(s, t) {
    let letterAdded;

    let tObj = {}
    t.split('').map(e => tObj[e] = (tObj[e] || 0) + 1);
    // for (let i of t){
    //     tObj[i] = (tObj[i] || 0) + 1;
    // }

    let sObj = {};
    s.split('').map(e => sObj[e] = (sObj[e] || 0) + 1);
    // for(let i of s) {
    //     sObj[i] = (sObj[i] || 0) + 1;
    // }

    for(let key in tObj) {
        if(!(key in sObj)) letterAdded = key;
        if (tObj[key] > sObj[key]) letterAdded = key;
    }

    return letterAdded;
}

//console.log(randomShuffling(s, t)); // Output e
//console.log(randomShuffling("abbdd", "dabadb")); // Output a
// console.log(randomShuffling("", "y")); // Output y
console.log(randomShuffling("aaaa", "aabaa")); // Output b
//console.log(randomShuffling("ae", "aae")); // Output a
