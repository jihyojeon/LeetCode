/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if (n===0) {
        return 0
    }
    return hammingWeight(n&(n-1)) + 1
};