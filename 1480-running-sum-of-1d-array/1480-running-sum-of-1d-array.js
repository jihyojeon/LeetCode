/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sum = function(nums) {
    return nums.reduce((prev, next) => (prev + next), 0);
}

var runningSum = function(nums) {
    return nums.map((num, i, orgNums) => sum(orgNums.slice(0,i+1)));
};