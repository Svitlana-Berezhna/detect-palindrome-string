const detectPalindrome = (str) => {
    if (!(typeof str === "string") && !(str instanceof String))
        return "Passed argument is not a string";
    if (!str.length)
        return "String is empty";
    let regExpr = /[\W_]/g;
    str = str.toLowerCase().replace(regExpr, "");
    let len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i])
            return "This string is not a palindrome!";
    }
    return "This string is palindrome!";
};

module.exports = detectPalindrome;
