var commonPrefix = function(str1, str2) {
    var longest = '';
    var startIndex = 0;
    var i = 0
    // for (let i = 0; i < str1.length+1; i++) {
        for (let j = i; j < str1.length+1 ; j++) {
            var cand = str1.slice(i, j);
            console.log({str1, str2, longest, i, cand})
            if (str2.slice(i, j) === cand) {
                if (cand.length > longest.length) {
                    startIndex = i;
                    longest = cand;
                }
            }
        }
    // }
    return `${'_'.repeat(startIndex)}${longest}`;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.slice(1, strs.length).reduce((prev, next) => commonPrefix(prev, next), strs[0])
};