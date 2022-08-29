/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters = {};
    let len = 0;
    let one = 0;
    s.split('').map(l => {
        if (letters[l] === 1) {
            letters[l] = 0;
            len += 2;
            one -= 1;
        } else {
            letters[l] = 1;
            one += 1;
        }
    })
    
    return len + !!one;
};