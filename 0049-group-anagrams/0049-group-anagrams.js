/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    const abSortedArr = strs.map((i) => [...i].sort().join(''));

    for (let i = 0; i < abSortedArr.length; i++) {
        if (!obj[abSortedArr[i]]) obj[abSortedArr[i]] = [];
        obj[abSortedArr[i]].push(strs[i]);
    }

    return Object.values(obj);
};