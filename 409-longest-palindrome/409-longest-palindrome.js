/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters = {}
    let len = 0
    s.split('').map(l => {
        if (letters[l] === 1) {
            letters[l] = 0;
            len += 2;
        } else {
            letters[l] = 1;
        }
    })
    
    
    return Object.values(letters).every(el => el===0) ? len : len + 1;
};