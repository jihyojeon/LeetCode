/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const regex = new RegExp('[A-Za-z0-9]');
    const letters = s.split('').filter((l) => regex.test(l)).map(l => l.toLowerCase());
    const input = letters.join();
    const reversed = letters.reverse().join();
    console.log(input, reversed);
    return input === reversed? true: false;
};