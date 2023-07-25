/**
 * @param {number[]} nums
 * @return {number}
 */
const pathSum = function (nums) {
  if (nums == null || nums.length === 0) return 0
  const tree = Array(2 ** 5).fill(null)
  for (let num of nums) {
    const r = ((num / 100) >> 0) - 1
    const pos = (((num % 100) / 10) >> 0) - 1
    const v = num % 10
    tree[Math.pow(2, r) + pos] = v
  }
  let res = 0
  const q = [1]
  while (q.length) {
    const cur = q.shift()
    const left = cur * 2
    const right = cur * 2 + 1
    if (left >= tree.length || (tree[left] == null && tree[right] == null))
      res += tree[cur]
    else {
      if (tree[left] != null) {
        q.push(left)
        tree[left] += tree[cur]
      }
      if (tree[right] != null) {
        q.push(right)
        tree[right] += tree[cur]
      }
    }
  }
  return res
}

