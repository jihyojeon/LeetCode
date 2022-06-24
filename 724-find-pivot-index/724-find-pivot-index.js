/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    var totalSum = nums.reduce((prev,next) => prev+next, 0);
    var pivot;
    nums.forEach((el, i) => {
        var leftSum = nums.slice(0, i).reduce((prev,next) => prev+next, 0);
        var rightSum = totalSum-el-leftSum;
        if (leftSum === rightSum) {
                pivot = pivot >= 0 ? pivot : i;
            }
        console.log({leftSum, i, rightSum, pivot})
        })
    
    return pivot >= 0 ? pivot : -1;

};