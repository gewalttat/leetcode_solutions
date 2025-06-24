/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
  let maxCount = 0;
  const count = {};
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    count[char] = (count[char] || 0) + 1;
    if (count[char] > maxCount) maxCount = count[char];
    if ((right - left + 1) - maxCount > k) {
      const leftChar = s[left];
      count[leftChar]--;
      left++;
    }


    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};