/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let obj = {}
  let length = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    while (obj[s[i]]) {
      delete obj[s[l]];
      l++;
    }
    obj[s[i]] = 1;
    length = Math.max(length, i - l + 1);
  }
  return length;
};