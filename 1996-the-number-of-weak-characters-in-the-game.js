/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
  const props = properties, n = props.length, maxDefFromRight = Array(n)
  props.sort((a, b) => a[0] - b[0])
  for(let max = 0, i = n - 1; i >= 0; i--) {
    max = Math.max(max, props[i][1])
    maxDefFromRight[i] = max
  }
  let res = 0
  
  for(let i = 0; i < n; i++) {
    const cur = props[i]
    let l = i, r = n
    while(l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if(props[mid][0] > props[i][0]) r = mid
      else l = mid + 1
    }
    
    if(l < n && maxDefFromRight[l] > props[i][1]) {
      res++   
    }
  }
  
  return res
};

