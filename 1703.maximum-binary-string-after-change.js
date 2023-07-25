/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minMoves = function (nums, k) {
  const pos = [],
    pre = []
  const n = nums.length,
    { min, floor: fl } = Math
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) pos.push(i)
  }
  let res = Infinity

  pre.push(0)
  for (let i = 0, len = pos.length; i < len; i++) {
    pre.push(pre[i] + pos[i])
  }

  for (let i = fl(k / 2), limit = pos.length - fl((k - 1) / 2); i <limit; i++) {
    const lcnt = fl(k / 2),
      rcnt = fl((k - 1) / 2)
    let current =
      lcnt * pos[i] - (pre[i] - pre[i - lcnt]) - (lcnt * (lcnt + 1)) / 2
    current +=
      pre[i + 1 + rcnt] - pre[i + 1] - rcnt * pos[i] - (rcnt * (rcnt + 1)) / 2

    res = min(res, current)
  }
  return res
}

