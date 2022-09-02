function afterDelete(arr) {
    const stack = [];
    const strings = arr.split('').map(str => {
        if (str !== '#') {
            stack.push(str)
        } else {
            stack.pop()
        }
    })
    
    return stack.join()
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return afterDelete(s) === afterDelete(t)
};

