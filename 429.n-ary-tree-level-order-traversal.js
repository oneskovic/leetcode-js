/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const res = []
  if(root == null) return res
  helper(root, 0, res)
  return res
};

function helper(node, index, res) {
  if(node == null) return
  if(res[index] == null) res[index] = []
  res[index].push(node.val)
  for(let i = 0, len = node.children.length; i < len; i++) {
    helper(node.children[i], index + 1, res)
  }
}

