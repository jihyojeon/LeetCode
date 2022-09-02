
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let nums = [...Array(n+1).keys()].map(x => 0);
    for (let i=1; i<nums.length; i++) {
        nums[i] = nums[i & (i-1)] + 1;
    }
    return nums
};