/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    const climb = [0, 1, 2];
    let i = 3
    while(!climb[n]) {
        climb.push(climb[i-1] + climb[i-2]);
        i += 1;
    }
    
    return climb[n]
};