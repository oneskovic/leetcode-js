/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
  const res = []
  for(let i = 1; i < 10; i++) {
    dfs(i)
  }
  
  return res
  
  function dfs(num) {
    if(num > n) return
    res.push(num)
    for(let i = 0; i < 10; i++) {
      const tmp = num * 10 + i
      if(tmp > n) return
      dfs(tmp)
    }
  }
};

