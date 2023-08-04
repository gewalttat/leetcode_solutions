/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 0;
        }
        obj[nums[i]] += 1;
    }

    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);

};