/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let right = nums.length - 1;
    let left = 0;
    while (left <= right) {
        const pivot = Math.floor((right + left)/2);
        if (nums[pivot] === target) {
            return pivot
        } else if (nums[pivot] < target) {
            left = pivot + 1
        } else {
            right = pivot - 1
        }
    }
    return -1
};