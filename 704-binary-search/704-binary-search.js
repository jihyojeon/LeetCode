/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    const numsLen = nums.length;
    const midIndex = Math.floor(numsLen/2);
    if (numsLen === 0) {
        return -1
    }
    if (target === nums[midIndex]) {
        return midIndex;
    }
    if (target > nums[midIndex]) {
        if (search(nums.slice(midIndex+1), target) === -1) {
            return -1
        }
        return midIndex + 1 + search(nums.slice(midIndex+1), target);
    } else {
        if (search(nums.slice(0, midIndex), target) === -1) {
            return -1
        }
        return search(nums.slice(0, midIndex), target);
    }
};