/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const small = Math.min(p.val, q.val);
    const big = Math.max(p.val, q.val);

    if (root.val <= big && root.val >= small) {
        return root
    }
    
    if (root.val < small) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return lowestCommonAncestor(root.left, p, q);
    }
    
};