var commonPrefix = function(str1, str2) {
    var longest = '';
    for (let j = 0; j < str1.length+1 ; j++) {
        var cand = str1.slice(0, j);
        if (str2.slice(0, j) === cand) {
            if (cand.length > longest.length) {
                longest = cand;
            }
        }
    }
    return `${longest}`;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.slice(1, strs.length).reduce((prev, next) => commonPrefix(prev, next), strs[0])
};