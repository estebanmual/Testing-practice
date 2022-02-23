function reverseString(string) {
    const reverse = []
    for (let i = 0; i < string.length; i++){
        
        reverse.unshift(string[i])
    }
    return reverse.join("");
}

module.exports = reverseString;