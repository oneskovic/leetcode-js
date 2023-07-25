/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
  const map = new Map()
  return helper(s, 0, new Set(wordDict), map)
};

function helper(str, idx, set, map) {
  if(idx === str.length) return true
  if(map.has(idx)) return map.get(idx)
  let res = false
  for(let i = idx; i < str.length; i++) {
    const tmp = str.slice(idx, i + 1)
    if(set.has(tmp)) {
      const bool = helper(str, i + 1, set, map)
      if(bool) {
        res = true
        break
      }
    }
  }
  map.set(idx, res)
  return res
}

