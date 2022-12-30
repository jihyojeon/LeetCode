# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
use hash map
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = {}
    for (let i=0; i< nums.length; i++) {
        const num = nums[i];
        const otherNum = target - num;
        if (numsMap[`${otherNum}`] != undefined) {
            return [numsMap[`${otherNum}`], i];
        } else {
            numsMap[`${num}`] = i;
        }
    }
};
```
