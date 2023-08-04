/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[nums.length - 1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
    }
    return min;
};