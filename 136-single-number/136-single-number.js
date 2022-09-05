/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const stack = []
    nums.sort().forEach(num => {
        if (!stack.includes(num)) {
            stack.push(num)
        } else {
            stack.pop()
        }
    })
    return stack[0]
};