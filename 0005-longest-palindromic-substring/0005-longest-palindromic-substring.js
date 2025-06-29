/**
 * @param {string} s
 * @return {string}
 */

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return [left + 1, right - 1];
}

var longestPalindrome = function (s) {
    let left, right = Math.floor(s.length / 2);
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let [l1, r1] = expandAroundCenter(s, i, i);
        let len1 = r1 - l1 + 1;
        let [l2, r2] = expandAroundCenter(s, i, i + 1);
        let len2 = r2 - l2 + 1;

        if (len1 > maxLen) {
            maxLen = len1;
            left = l1;
            right = r1;
        }

        if (len2 > maxLen) {
            maxLen = len2;
            left = l2;
            right = r2;
        }
    }

    return s.slice(left, right + 1)
};