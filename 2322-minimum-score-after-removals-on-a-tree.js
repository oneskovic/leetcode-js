/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
const minimumScore = function (nums, edges) {
  const n = nums.length, m = edges.length
  const graph = {}
  const children = {}
  const xor = nums.slice(0)
  const degree = Array(n).fill(0)

  for(const [p, q] of edges) {
    if(graph[p] == null) graph[p] = []
    if(graph[q] == null) graph[q] = []
    graph[p].push(q)
    graph[q].push(p)
    degree[p]++
    degree[q]++
  }

  let val = 0
  const seen = new Set()
  const queue = []
  for(let i = 0; i < n; i++) {
    val ^= nums[i]
    if(degree[i] === 1) {
      queue.push(i)
      seen.add(i)
    }
  }

  while(queue.length) {
    const cur = queue.shift()
    for(const nxt of (graph[cur] || [])) {
      if(!seen.has(nxt)) {
        if(children[nxt] == null) children[nxt] = new Set()
        children[nxt].add(cur)
        for(const e of (children[cur] || [])) {
          children[nxt].add(e)
        }
        xor[nxt] ^= xor[cur]
      }
      degree[nxt]--
      if(degree[nxt] === 1) {
        seen.add(nxt)
        queue.push(nxt)
      }
    }
  }

  let res = Infinity

  for(let i = 0; i < m - 1; i++) {
    for(let j = i + 1; j < m; j++) {
      let [a, b] = edges[i]
      // Let a, c be the lower break points
      if(children[a]?.has(b)) {
        ;[a, b] = [b, a]
      }
      let [c, d] = edges[j]
      if(children[c]?.has(d)) {
        ;[c, d] = [d, c]
      } 
      let cur
      if(children[a]?.has(c)) {
        cur = [xor[c], xor[a] ^ xor[c], val ^ xor[a]] 
      } else if(children[c]?.has(a)) {
        cur = [xor[a], xor[c] ^ xor[a], val ^ xor[c]]
      } else {
        cur = [xor[a], xor[c], val ^ xor[a] ^ xor[c]]
      }
      res = Math.min(res, Math.max(...cur) - Math.min(...cur))
    }
  }

  return res
}

