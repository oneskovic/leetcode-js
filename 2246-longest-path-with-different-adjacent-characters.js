/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  const n = parent.length
  const hash = {}
  for(let i = 1; i < n; i++) {
    if(hash[parent[i]] == null) hash[parent[i]] = []
    hash[parent[i]].push(i)
  }

  let res = 0
  dfs(0)
  return res
  
  function dfs(i) {
    let max1 = 0, max2 = 0
    for(const j of (hash[i] || [])) {
      const len = dfs(j)
      if(s[i] === s[j]) continue
      if(len > max1) {
        const tmp = max1
        max1 = len
        max2 = tmp
      } else if(len > max2) {
        max2 = len
      }
    }
    res = Math.max(res, max1 + max2 + 1)    
    return max1 + 1
  }
};


