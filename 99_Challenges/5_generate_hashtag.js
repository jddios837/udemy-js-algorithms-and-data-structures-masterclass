
let text = "code" + " ".repeat(140) + "wars";
let text1 = "a".repeat(139);

console.log(generateHashtag(""))  //, false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)))  //, false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"))  //, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"))  //, "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"))  //, "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"))  //, "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))  //, "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))  //, false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)))  //, "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)))  //, false, "Too long")

function generateHashtag (str) {
    if(str.trim().length === 0) return false;

    let test = str
        .trim()
        .split(" ")
        .map(e => {
            if(e.length > 0) {
                return e[0].toUpperCase() + e.substring(1, e.length)
            }
        })
        .join('')
    if (test.length >= 140) return false;
    return '#' + test;
}

//REFACTOR
// function generateHashtag (str = "") {
//     var hashtag = `#${str.trim().replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`
//     return !!str && hashtag.length <= 140 && hashtag
// }