/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root || (!root.right && !root.left)) {
        return 0
    } 
    
    let diameter = 0;
    
    const getDepth = function(root) {
        if (!root) {
            return 0
        }
        const r = getDepth(root.right);
        const l = getDepth(root.left);
        diameter = Math.max(diameter, r+l);
        return 1 + Math.max(r, l)
    }
    
    getDepth(root);
    
    return diameter
};