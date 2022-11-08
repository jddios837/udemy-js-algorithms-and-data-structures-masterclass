function spinWords(string){
    //TODO Have fun :)
    let arr = string.split(' ');
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i].length >= 5) {
            let newString = "";
            let word = arr[i];
            for(let j = word.length - 1; j >= 0; j--) {
                newString = newString.concat(word[j]);
                //newString = newString + word[j];
            }
            arr[i] = newString;
        }

    }
    console.log(arr);
    let newArray = "";
    for (const e of arr) {
        newArray = newArray.concat(e, ' ');
    }
    return newArray.trim();
}



console.log(spinWords("Hola a todos"));