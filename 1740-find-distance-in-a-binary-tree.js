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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
const findDistance = function(root, p, q) {
  if(p === q) return 0
  return dfs(root, 0)

  function dfs(node, depth) {
    let res = depth
    if (node == null) {
      res = 0
    } else if(node.val === p || node.val === q) {
      let left = dfs(node.left, 1)
      let right = dfs(node.right, 1)
      res = (left > 0 || right > 0) ? Math.max(left, right) : res
    } else {
      let left = dfs(node.left, depth + 1)
      let right = dfs(node.right, depth + 1)
      res = left + right
      if(left !== 0 && right !== 0) {
        res -= 2 * depth
      }
    }
    return res
  }
};

