/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
const frogPosition = function (n, edges, t, target) {
  const m = new Map()
  for(let e of edges) {
    const [from, to] = e
    if(!m.has(from - 1)) m.set(from - 1, [])
    if(!m.has(to - 1)) m.set(to - 1, [])
    m.get(from - 1).push(to - 1)
    m.get(to - 1).push(from - 1)
  }
  const visited = new Set()
  visited.add(0)
  const q = [0]
  const res = [1]
  while(q.length && t-- > 0) {
    for(let size = q.length; size > 0 ; size--) {
      const u = q.shift()
      let count = 0
      for(let e of (m.get(u) || [])) {
        if(!visited.has(e)) count++
      }
      for(let e of (m.get(u) || [])) {
        if(visited.has(e)) continue
        q.push(e)
        visited.add(e)
        res[e] = res[u] / count
      }
      if(count > 0) res[u] = 0      
    }
  }
  return res[target - 1] || 0
}

