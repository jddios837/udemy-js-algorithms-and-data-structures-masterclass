// los contrarios del ADN son A -> T y C -> G

// INPUT es una cadena string
// OUTPUT es una cadena string

// EXAMPLES
console.log(DNAStrand("ATTGC")); //"ATTGC" --> "TAACG"
console.log(DNAStrand("GTAT")); //"GTAT" --> "CATA"
//"GTAT" --> "CATA"


function DNAStrand(dna){
    return dna
        .split('')
        .map(e => {
            if (e === 'A') return 'T';
            if (e === 'T') return 'A';
            if (e === 'C') return 'G';
            if (e === 'G') return 'C';
        })
        .join('');
}