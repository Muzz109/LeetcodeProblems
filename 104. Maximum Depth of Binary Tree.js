Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

-------------------------------------------------------------------
Recursion Principles

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
var maxDepth = function(root) {
    
    let Maxnode = function(node,sum){
        
        if(node == null){
            
            return sum
            
        }
        
        return Math.max(Maxnode(node.left,sum+1),Maxnode(node.right,sum+1));
    }
    
    
    
    
    return Maxnode(root,0);
    
};
