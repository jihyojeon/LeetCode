/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return isIsomorphicOneway(s, t) && isIsomorphicOneway(t, s);
};


var isIsomorphicOneway = function(s, t) {
    var obj = getObject(s, t);
    var reverse = '';
    for (var i = 0; i < s.length ; i++) {
        reverse += obj[s[i]];
    }
    
    return reverse === t;
};


var getObject = function(s, t) {
    var obj = {};
    for (var i = 0; i < s.length ; i++) {
        obj[s[i]] = t[i];
    }
    return obj;
}