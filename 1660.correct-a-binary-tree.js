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
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
const correctBinaryTree = (root, seen = new Set(), found = false) => {
  const go = (root) => {
    seen.add(root)
    if (root.right && seen.has(root.right)) {
      found = true
      return null
    }
    if (!found && root.right) root.right = go(root.right)
    if (!found && root.left) root.left = go(root.left)
    return root
  }
  return go(root)
}

