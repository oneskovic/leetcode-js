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
 * @return {TreeNode}
 */
const lcaDeepestLeaves = function(root) {
  let maxDepth = 0, lcaNode = null

  function lca(node, depth) {
    if(node == null) return depth - 1
    maxDepth = Math.max(depth, maxDepth)
    const left = lca(node.left, depth + 1)
    const right = lca(node.right, depth + 1)
    if(left === maxDepth && right === maxDepth) {
      lcaNode = node
    }
    return Math.max(left, right)
  }

  lca(root, 0)
  return lcaNode
};


