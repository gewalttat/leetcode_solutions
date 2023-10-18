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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const foo = node => {    
        if (!node) return new TreeNode(val);
        if (val > node.val) node.right = foo(node.right);
        else node.left = foo(node.left);
        return node;
    }
    return foo(root)
};


/**
insert_node(binary_tree, new_node) node ← binary_tree.root_node
while node
last_node ← node
if new_node.value > node.value
            node ← node.right
else
node ← node.left
if new_node.value > last_node.value
        last_node.right ← new_node
else 
last_node.left ← new_node
 */