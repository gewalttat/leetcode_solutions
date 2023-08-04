/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.reduce((acc, next, i, nums) => {
        acc.push(nums[nums[i]]);
        return acc;
    }, []);
};