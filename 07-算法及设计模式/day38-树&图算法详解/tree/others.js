/**
 * 二叉树（计算树的高度）
 */
var maxDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**
 * 二叉树（左子叶之和）
 */
var sumOfLeftLeaves = function(root) {
    var val = 0;
    if (!root) return 0;
    if (root.left && !root.left.left && !root.left.right) {
        val = root.left.val;
    }
    return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

/**
 * 二叉树（反转二叉树）
 */
var invertTree = function(root) {
    if (!root || (!root.left && !root.right)) return root;
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    return exchangeChildNode(root);
}

var exchangeChildNode = function(node) {
    var temp = new TreeNode();
    temp = node.left;
    node.left = node.right;
    node.right = temp;
    return node;
}
