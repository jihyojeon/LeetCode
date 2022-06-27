/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var result = true;
    for (let i = 0; i < s.length; i++) {
        var j = t.indexOf(s[i]);
        if (j >= 0) {
            t = t.slice(j+1);
        } else {
            result = false;
            break;
        }
    }
    return result
};