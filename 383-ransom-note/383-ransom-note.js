/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const m = magazine.split('');
    const r = ransomNote.split('');
    let l = r.length;
    
    for (let i=0 ; i<r.length; i++) {
        for (let j=0; j<m.length; j++) {
            if (r[i] === m[j]) {
                m[j] = '_';
                l -= 1;
                break;
            }
        }
    }
    
    return l === 0? true: false
 };