/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const timeBooked = {};
    const l = intervals.length;
    for (let i=0; i<l; i++) {
        const interval = intervals[i];
        for (let j=interval[0]; j<interval[1]; j++) {
            if (timeBooked[j]) {
                return false
            }
            timeBooked[j] = 1;
        }
    }
    return true
};