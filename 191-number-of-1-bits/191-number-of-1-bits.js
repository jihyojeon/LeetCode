/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // const arr = [0];
    // for (let i=1; i<=n; i++) {
    //     arr.push(arr[i&(i-1)]+1)
    // }
    // return arr[n]
    
    if (n===0) {
        return 0
    }
    return hammingWeight(n&(n-1)) + 1
};