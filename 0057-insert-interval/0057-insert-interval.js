/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [start, end] = newInterval;
    const left = [];
    const right = [];
  
    for (let interval of intervals) {
        const [p1, p2] = interval;
	
        if (p2 < start) {
            left.push(interval);
        } else if (p1 > end) {
            right.push(interval);
        } else {
            start = Math.min(start, p1);
            end = Math.max(end, p2);
        }
    }
  
    return [...left, [start, end], ...right]; 
};