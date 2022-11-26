

function isValidWalk(walk) {
    //insert brilliant code here
    // if lenght is 0 return false
    // if lenght is less than 10
    if (walk.lenght === 0 || walk.length < 10) return false

    // if we divide betweent 2 and this give a decimal value return false
    let val = Number.isInteger(walk.length / 2);
    if (!Number.isInteger(walk.length / 2)) return false

    // get the middle of the walk array
    let middle = walk.length / 2;
    let dirrections = {
        n: 's',
        s: 'n',
        w: 'e',
        e: 'w'
    }
    // loop from i to that middle value

    for(let i = 0; i <= middle - 1; i++) {
        // in walk[i] === walk[i + middle] (but contraru n->s s->n and w->e e->w)
        if(dirrections[walk[i]] != walk[i + middle]) return false;
    }

    return true;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // false
console.log(isValidWalk(['w'])); // false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // false