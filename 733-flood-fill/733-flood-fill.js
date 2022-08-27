/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const neighbours = [[-1,0], [0,-1], [0,1], [1,0]];
var floodFill = function(image, sr, sc, color) {
    const prevColor = image[sr][sc];
    if (color === prevColor) {
        return image
    }
    const fill = (x, y) => {
        if (
            !image[x] ||
            image[x][y] === undefined ||
            image[x][y] === color ||
            image[x][y] !== prevColor
        ) {
            return;
        } else {
            image[x][y] = color;
            neighbours.forEach(coor => {
                fill(x+coor[0], y+coor[1]);
            })
        }
        
    };
    
	fill(sr, sc);
    
	return image;
    
};