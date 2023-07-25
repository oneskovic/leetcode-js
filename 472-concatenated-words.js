/**
 * @param {string[]} words
 * @return {string[]}
 */

const findAllConcatenatedWordsInADict = function (words) {
  const pre = new Set()
  words.sort((a, b) => a.length - b.length)
  const res = []
  for(let i = 0; i < words.length; i++) {
    if(valid(words[i], pre)) {
      res.push(words[i])
    }
    pre.add(words[i])
  }

  return res

  function valid(str, set) {
    if(set.size === 0) return false
    const dp = Array(str.length + 1).fill(false)
    dp[0] = true
    for(let i = 1; i <= str.length; i++) {
      for(let j = 0; j < i; j++) {
        if(!dp[j]) continue
        if(set.has(str.slice(j, i))) {
          dp[i] = true
          break
        }
      }
    }
    
    return dp[str.length]
  }
}




