/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var result = true;
    var nextT = t;
    for (let i = 0; i < s.length; i++) {
        var j = nextT.indexOf(s[i]);
        if (j >= 0) {
            nextT = nextT.slice(j+1);
        } else {
            result = false;
            break;
        }
    }
    return result
};