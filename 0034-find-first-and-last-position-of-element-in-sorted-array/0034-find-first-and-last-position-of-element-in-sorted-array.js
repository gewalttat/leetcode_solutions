/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      let low = mid, high = mid;
      while(low >= 0 && nums[low] == target)
				low--;

			while(high < nums.length && nums[high] == target)
				high++;

			return [ low + 1, high - 1 ];
    }
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return [-1, -1];
};