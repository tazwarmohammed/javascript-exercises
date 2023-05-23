const palindromes = function (str) {
    const newString = str.replace(/[^a-zA-Z]/g, "");
    for (let i = 0, j = newString.length-1; i<=j; i++, j--) {
        if(newString[i].toLowerCase() !== newString[j].toLowerCase()) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
