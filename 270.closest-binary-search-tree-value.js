/**

Given a non-empty binary search tree and a target value,
find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value
in the BST that is closest to the target.

Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4

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
 * @param {number} target
 * @return {number}
 */
const closestValue = function(root, target) {
  let res = root.val
  while(root) {
    if(Math.abs(root.val - target) < Math.abs(res - target)) {
      res = root.val
    }
    root = root.val > target ? root.left : root.right
  }
  return res
};

