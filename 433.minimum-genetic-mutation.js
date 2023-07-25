/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function(start, end, bank) {
  const obj = { res: Number.MAX_VALUE }
  dfs(start, end, bank, 0, obj, new Set())
  return obj.res === Number.MAX_VALUE ? -1 : obj.res
}

function dfs(s, e, bank, num, obj, visited) {
  if(s === e) {
    obj.res = Math.min(obj.res, num)
    return
  }
  for(let el of bank) {
    let diff = 0
    for(let i = 0, len = s.length; i < len; i++) {
      if(s[i] !== el[i]) {
        diff++
        if(diff > 1) break
      }
    }
    if(diff === 1 && !visited.has(el)) {
      visited.add(el)
      dfs(el, e, bank, num + 1, obj, visited)
      visited.delete(el)
    }
  }
} 

