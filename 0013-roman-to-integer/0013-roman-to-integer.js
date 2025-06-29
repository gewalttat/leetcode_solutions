/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;;

    for (let i = 0; i < s.length; i++) {
        const curr = obj[s[i]];
        const next = obj[s[i + 1]]
        if (next > curr) {
            result -= curr;
        } else {
            result += curr;
        }
    };

    return result
};