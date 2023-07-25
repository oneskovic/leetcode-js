/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {
  let node1, node2;
  let prev = new TreeNode(-Infinity);
  traverse(root);
  swap(node1, node2)
    
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (node.val < prev.val) {
      node2 = node;
      if (!node1) node1 = prev;
    }
    prev = node;
    traverse(node.right);
  }

  function swap(node1, node2) {
    let temp = node1.val
    node1.val = node2.val
    node2.val = temp
  }
}

