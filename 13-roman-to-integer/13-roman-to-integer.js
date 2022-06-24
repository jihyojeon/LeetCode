const Roman = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var num = Roman[s[s.length-1]];
    for (let i = s.length - 2 ; i >= 0 ; i--) {
        if (Roman[s[i]] >= Roman[s[i+1]]) {
            num += Roman[s[i]]
        } else {
            num -= Roman[s[i]]
        }
    }
    return num

};