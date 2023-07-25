/**
 * @param {number[]} favorite
 * @return {number}
 */
const maximumInvitations = function(favorite) {
  const n = favorite.length
  const inDegree = Array(n).fill(0)
  const { max } = Math
  for(let i = 0; i < n; i++) {
    inDegree[favorite[i]]++
  }
  
  let q = []
  const visited = Array(n).fill(0)
  const depth = Array(n).fill(1)
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 0) {
      q.push(i)
      visited[i] = 1
      depth[i] = 1
    }
  }
  
  while(q.length) {
    const cur = q.pop()
    const nxt = favorite[cur]
    inDegree[nxt]--
    if(inDegree[nxt] === 0) {
      q.push(nxt)
      visited[nxt] = 1
    }
    depth[nxt] = max(depth[nxt], depth[cur] + 1)
  }

  let maxLoopSize = 0
  let twoNodesSize = 0

  for(let i = 0; i < n; i++) {
    if(visited[i] === 1) continue
    let j = i
    let cnt = 0
    while(visited[j] === 0) {
      cnt++
      visited[j] = 1
      j = favorite[j]
    }
    
    if(cnt > 2) {
      maxLoopSize = max(maxLoopSize, cnt)
    } else if(cnt === 2) {
      twoNodesSize += depth[i] + depth[favorite[i]]
    }
  }
  
  return max(maxLoopSize, twoNodesSize)
};

