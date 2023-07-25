/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const distanceK = function(root, target, K) {
  const map = new Map();
  const res = [];
  if (target == null || K < 0 || root == null) return res;
  buildGraph(root, null);
  const visited = new Set();
  const q = [];
  visited.add(target);
  q.push(target);
  while (q.length) {
    const len = q.length;
    if (K === 0) {
      for (let i = 0; i < len; i++) res.push(q.shift().val);
      return res;
    }
    for (let i = 0; i < len; i++) {
      const el = q.shift();
      for (let e of map.get(el)) {
        if (visited.has(e)) continue;
        visited.add(e);
        q.push(e);
      }
    }
    K--;
  }
  return res;

  function buildGraph(node, parent) {
    if (node === null) return;
    if (!map.has(node)) {
      map.set(node, []);
      if (parent !== null) {
        map.get(node).push(parent);
        if (!map.has(parent)) map.set(parent, []);
        map.get(parent).push(node);
      }
      buildGraph(node.left, node);
      buildGraph(node.right, node);
    }
  }
};

