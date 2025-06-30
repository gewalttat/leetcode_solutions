/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const sorted_nums = nums.sort((a, b) => a - b);

    const stack = [{ index: 0, path: [] }];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.path);

        for (let i = node.index; i < sorted_nums.length; i++) {
            if (i > node.index && sorted_nums[i] == sorted_nums[i - 1]) continue
            const new_path = [...node.path, sorted_nums[i]];
            stack.push({ index: i + 1, path: new_path })
        }
    }

    return result

};