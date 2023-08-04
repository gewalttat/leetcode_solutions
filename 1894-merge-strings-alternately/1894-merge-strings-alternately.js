/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const maxLen = word1.length > word2.length ? word1.length : word2.length;
    const res = [];

    for (let i = 0; i < maxLen; i++) {
        word1[i] && res.push(word1[i]);
        word2[i] && res.push(word2[i]);
    }

    return res.join('');
};