/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const regex = new RegExp('[A-Za-z0-9]');
    const letters = s.split('').filter((l) => regex.test(l)).map(l => l.toLowerCase());
    let right = letters.length - 1;
    for (let left=0; left<=right; left ++) {
        if (letters[left] != letters[right]) {
            return false;
        } else {
            right -= 1;
        }
    }
    return true;
};