/**

Given a binary tree, find the largest subtree
which is a Binary Search Tree (BST),
where largest means subtree with largest number of nodes in it.

Note:
A subtree must include all of its descendants.

Example:

Input: [10,5,15,1,8,null,7]

   10 
   / \ 
  5  15 
 / \   \ 
1   8   7

Output: 3
Explanation: The Largest BST Subtree in this case is the highlighted one.
             The return value is the subtree's size, which is 3.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const largestBSTSubtree = function(root) {
  const res = helper(root)
  return res[2]
}

function helper(node) {
  if (!node) return [Number.MAX_VALUE, -Number.MAX_VALUE, 0]
  const left = helper(node.left)
  const right = helper(node.right)
  if (node.val > left[1] && node.val < right[0]) {
    return [
      Math.min(node.val, left[0]),
      Math.max(node.val, right[1]),
      left[2] + right[2] + 1
    ]
  } else {
    return [-Number.MAX_VALUE, Number.MAX_VALUE, Math.max(left[2], right[2])]
  }
}

