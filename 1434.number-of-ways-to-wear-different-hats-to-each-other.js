/**
 * @param {number[][]} hats
 * @return {number}
 */
const numberWays = function(hats) {
  const map = new Map()
  const n = hats.length
  for(let i = 0; i < n; i++) {
    for(const h of hats[i]) {
      if(!map.has(h)) map.set(h, [])
      map.get(h).push(i)
    }
  }
  const mod = 1e9 + 7
  const allMask = (1 << n) - 1
  const dp = Array.from({ length: 41 }, () => Array(1024))
  
  return dfs(1, 0)
  
  function dfs(hat, mask) {
    if(mask === allMask) return 1
    if(hat > 40) return 0
    if(dp[hat][mask] != null) return dp[hat][mask]
    
    let res = 0
    
    // not using this `hat`
    res += dfs(hat + 1, mask)
    for(const p of (map.get(hat) || [])) {
      if(((mask >> p) & 1) === 0) {
        res += dfs(hat + 1, mask | (1 << p))
        res = res % mod
      }
    }
    dp[hat][mask] = res
    return res
  }
  
};

