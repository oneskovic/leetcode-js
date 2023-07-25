/**
 * @param {number[]} nums
 * @return {number}
 */
const largestComponentSize = function (nums) {
  const { sqrt } = Math
  const n = nums.length
  const uf = new UF(n)
  const primes = {}
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    const prSet = primesSet(num)
    for (const e of prSet) {
      if (primes[e] == null) primes[e] = []
      primes[e].push(i)
    }
  }

  const vals = Object.values(primes)
  for(const idxArr of vals) {
    const len = idxArr.length
    for(let i = 0; i < len - 1; i++) {
      uf.union(idxArr[i], idxArr[i + 1])
    }
  }
  let res = 0
  const hash = {}
  for(let i = 0; i < n; i++) {
    const root = uf.find(i)
    if(hash[root] == null) hash[root] = 0
    hash[root]++
  }
  return Math.max(...Object.values(hash))

  function primesSet(n) {
    const limit = ~~(sqrt(n) + 1)
    for (let i = 2; i < limit; i++) {
      if (n % i === 0) {
        const res = primesSet(n / i)
        res.add(i)
        return res
      }
    }
    return new Set([n])
  }
}

class UF {
  constructor(n) {
    this.root = Array(n)
      .fill(null)
      .map((_, i) => i)
  }
  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x])
    }
    return this.root[x]
  }
  union(x, y) {
    const xr = this.find(x)
    const yr = this.find(y)
    this.root[yr] = xr
  }
}

