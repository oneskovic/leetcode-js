/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = function (nums, k) {
  const map = new Map()

  let res = 0
  for(const e of nums) {
    const tmp = gcd(e, k)

    for(const [key, v] of map) {
      if(tmp * key % k === 0) {
        res += v
      }
    }
    if(map.get(tmp) == null) map.set(tmp, 0)
    map.set(tmp, map.get(tmp) + 1)
  }

  return res

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
}

