/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
     let i = 0;
    let j = 0;
    const result = [];

    while (i < nums1.length && j < nums2.length) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        if (num1 < num2) {
            result.push(num1);
            i++
        } else {
            result.push(num2);
            j++
        }
    }

    if (i < nums1.length) {
        result.push(...nums1.slice(i))
    }

    if (j < nums2.length) {
        result.push(...nums2.slice(j))
    }

    const middle = Math.floor(result.length / 2);

    if (result.length % 2 === 0) {
        return (result[middle - 1] + result[middle]) / 2;
    }

    return result[middle];
};