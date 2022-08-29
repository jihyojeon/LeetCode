/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const m = {};
    magazine.split('').forEach(l => {
        if (m[l]) {
            m[l] += 1
        } else {
            m[l] = 1
        }
    });
    const r = {};
    ransomNote.split('').forEach(l => {
        if (r[l]) {
            r[l] += 1
        } else {
            r[l] = 1
        }
    });

    const keys = Object.keys(r);
    for (let i=0; i<keys.length; i++) {
        if (!m[keys[i]] || r[keys[i]] > m[keys[i]]) {
            return false
        }
        
    }
    return true
    
 };