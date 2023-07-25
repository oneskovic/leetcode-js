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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y, depth = 1, P = {}, D = {}) => {
  let q = [root]
  while (q.length) {
    let K = q.length
    while (K--) {
      let p = q.shift()
      if (p.left) {
        if (p.left.val === x) (P.x = p.val), (D.x = depth)
        if (p.left.val === y) (P.y = p.val), (D.y = depth)
        q.push(p.left)
      }
      if (p.right) {
        if (p.right.val === x) (P.x = p.val), (D.x = depth)
        if (p.right.val === y) (P.y = p.val), (D.y = depth)
        q.push(p.right)
      }
    }
    ++depth
  }
  return P.x !== P.y && D.x === D.y
}


