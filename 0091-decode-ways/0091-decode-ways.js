/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s || s[0] === '0') return 0;

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        const one_digit = s[i - 1];
        const two_digit = s.slice(i - 2, i);

        if (one_digit >= '1' && one_digit <= '9') {
            dp[i] += dp[i - 1];
        }

        if (two_digit >= '10' && two_digit <= '26') {
            dp[i] += dp[i - 2];
        }

    }

    return dp[n]
};