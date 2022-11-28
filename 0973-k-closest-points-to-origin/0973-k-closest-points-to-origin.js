/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const dis = (x,y) => (x*x + y*y);
    return points.sort((a,b) => dis(a[0], a[1]) - dis(b[0], b[1])).splice(0,k).map(el => [el[0], el[1]]);
};