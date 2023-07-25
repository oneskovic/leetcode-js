
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
const longestUnivaluePath = function(root) {
  let res = 0
  dfs(root)
  return res

  function dfs(node) {
    if(node == null) return 0
    let left = dfs(node.left), right = dfs(node.right)
    if(node.left && node.left.val === node.val) left++
    else left = 0

    if(node.right && node.right.val === node.val) right++
    else right = 0

    res = Math.max(res, left + right)
    return Math.max(left, right)
  }
};

