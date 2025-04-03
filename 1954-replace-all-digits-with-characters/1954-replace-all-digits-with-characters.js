/**
 * @param {string} s
 * @return {string}
 */

function shift(s, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(s);
    return alphabet[index + +n];
}
var replaceDigits = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) || s[i] === '0') {
            result += shift(s[i - 1], s[i]);
        } else {
            result += s[i];
        }
    }

    return result;
};