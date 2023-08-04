/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    if (nums.length <= 2) return nums;

    return nums.reduce((acc, next) => {
        if (nums.filter((i) => i === next).length === 1) {
            acc.push(next);
        }
        return acc;
    }, [])
};