/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    if (x.length <= 1) {
        return true;
    }
    if (x[0] !== x[x.length-1]) {
        return false;
    } 
    return isPalindrome(x.slice(1, x.length-1));
};