var commonPrefix = function(str1, str2) {
    var longest = '';
    
    str1.split('').forEach((el, i) => {
        if (str1.slice(0, i+1) === str2.slice(0, i+1)) {
            longest += el;
        }
    })
    
    return longest;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((prev, next) => commonPrefix(prev, next), strs[0])
};