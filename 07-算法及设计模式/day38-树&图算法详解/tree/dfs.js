/**
 * 二叉树
 * 深度优先遍历 DFS
 * 分为3种情况：前序、中序、后序
 */

// 1. 前序
var preorderTraversal = (node, result=[]) => {
    if (node) {
        // 先根节点
        result.push(node.val);
        // 然后遍历左子树
        preorderTraversal(node.left, result);
        // 再遍历右子树
        preorderTraversal(node.right, result);
    }
    return result;
}

// 2. 中序
var inorderTraversal = (node, result=[]) => {
    if (node) {
        // 遍历左子树
        inorderTraversal(node.left, result);
        // 根节点
        result.push(node.val);
        // 再遍历右子树
        inorderTraversal(node.right, result);
    }
    return result;
}

// 3. 后序
var postorderTraversal = (node, result=[]) => {
    if (node) {
        // 遍历左子树
        postorderTraversal(node.left, result);
        // 再遍历右子树
        postorderTraversal(node.right, result);
        // 根节点
        result.push(node.val);
    }
    return result;
}
