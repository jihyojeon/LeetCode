/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // return s.split('').sort().join() === t.split('').sort().join()
    const first = s.split('').sort();
    const second = t.split('').sort();
    for (let i=first.length-1; i>=0; i--) {
        if (first[i] != second[i]) {
            return false
        }
        first.pop();
        second.pop();
    }
    return second.length === 0? true: false;
};