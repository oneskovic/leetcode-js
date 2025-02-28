/**
 * @param {number[]} nums
 * @return {boolean}
 */
const gcdSort = function(nums) {
  const n = nums.length
  const maxNum = Math.max(...nums);
  const spf = sieve(maxNum);

  const uf = new UnionFind(maxNum + 1)
  for(const e of nums) {
    for(const f of getFactors(e)) uf.union(e, f)
  }
  const clone = nums.slice()
  clone.sort((a, b) => a - b)

  for(let i = 0; i < n; i++) {
    if(uf.find(nums[i]) !== uf.find(clone[i])) return false
  }
  
  return true

  function sieve(n) { // O(Nlog(logN)) ~ O(N)
    const res = [0, 0]
    for (let i = 2; i <= n; ++i) res[i] = i;
    for (let i = 2; i * i <= n; i++) {
      if (res[i] != i) continue; // skip if `i` is not a prime number
      for (let j = i * i; j <= n; j += i) {
        if (res[j] == j) { // marking spf[j] if it is not previously marked
          res[j] = i;
        }
      }
    }
    return res
  }
  
  function getFactors(n) { // O(logN)
    const factors = [];
    while (n > 1) {
      factors.push(spf[n]);
      n = ~~(n /spf[n]);
    }
    return factors;
  }
};

function gcd( x,  y) {
    return y == 0 ? x : gcd(y, x % y);
}

class UnionFind {
    constructor(n) {
        this.parent = [];
        for (let i = 0; i < n; i++) this.parent[i] = i;
    }
    find(x) {
        if (x == this.parent[x]) return x;
        return this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    union(u,  v) {
        let pu = this.find(u), pv = this.find(v);
        if (pu != pv) this.parent[pu] = pv;
    }
};

