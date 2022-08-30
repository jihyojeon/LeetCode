/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const lista = a.split('');
    const listb = b.split('');
    let result = '';
    let up = 0;
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const aIdx = a.length - 1 - i;
        const bIdx = b.length - 1 - i;
        result = `${((lista[aIdx] ^ listb[bIdx]) ^ up)}${result}`;
        if (Number(lista[aIdx]??'0') + Number(listb[bIdx]??'0') + Number(up) >=2 ) {
            up = 1;
        } else {
            up = 0;
        }

    }
    return `${!!up ? 1 : ''}${result}`
};