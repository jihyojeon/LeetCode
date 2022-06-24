/**
 * @param {string} s
 * @return {boolean}
 */

const parentheses = {
    ')' : '(',
    '}' : '{',
    ']' : '['
};

var isValid = function(s) {
    var stack = []
    for (let i=0; i<s.length; i++) {
        var el = s[i];
        if (stack.length > 0 && parentheses[el] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(el);
        };
    }
    return stack.length === 0 ? true : false;
};