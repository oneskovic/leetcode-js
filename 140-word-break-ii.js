/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function(s, wordDict) {
  const set = new Set(wordDict)
  const map = new Map()
  return helper(s, 0, set, map)
};

function helper(str, idx, set, map) {
  if(idx === str.length) return []
  if(map.has(idx)) return map.get(idx)
  const res = []
  for(let i = idx; i < str.length; i++) {
    const tmp = str.slice(idx, i + 1)
    if(set.has(tmp)) {
      const arr = helper(str, i + 1, set, map)
      if(i === str.length - 1) res.push(tmp)
      for(let item of arr) {
        res.push(`${tmp} ${item}`)
      }
    }
  }
  map.set(idx, res)
  return res
}
