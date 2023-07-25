/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const areConnected = function(n, threshold, queries) {
  const arr = []
  const uf = new UF(n)
  setup(n, threshold, uf)
  for(let i = 0, len = queries.length; i < len;i++) {
    arr.push(uf.check(queries[i][0], queries[i][1]))
  }
  return arr
};

function setup(n, t, uf) {
  for (let i = t + 1; i <= n; i++) {
    let m = 1;
    while (i * m <= n) {
      uf.union(i, i * m);
      m += 1;
    }
  }
}


class UF {
  constructor(n) {
    this.root = Array(n).fill(null).map((_, i) => i)
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
  check(x, y) {
    return this.find(x) === this.find(y)
  }
}


