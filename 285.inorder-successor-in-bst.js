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
 * @return {TreeNode}
 */
const inorderSuccessor = function(root, p) {
  const res = { node: null }
  dfs(root, [], res, p)
  return res.node
};

function dfs(node, arr, res, target) {
  if(node === null) return
  dfs(node.left, arr, res, target)
  if(arr.length && arr[arr.length - 1] === target) res.node = node
  arr.push(node)
  dfs(node.right, arr, res, target)
} 

