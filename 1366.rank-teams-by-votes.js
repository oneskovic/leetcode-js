/**
 * @param {string[]} votes
 * @return {string}
 */
const rankTeams = function(votes) {
  const hash = {}
  const l = votes[0].length
  for(let vote of votes) {
    for(let i = 0; i < l; i++) {
      const ch = vote[i]
      if(hash[ch] == null) hash[ch] = Array(l).fill(0)
      hash[ch][i]++
    }
  }
  const keys = Object.keys(hash)
  keys.sort((a, b) => {
    for(let i = 0; i < l; i++) {
      if(hash[a][i] !== hash[b][i]) {
        return hash[b][i] - hash[a][i]
      }
    }
    return a === b ? 0 : (a < b ? -1 : 1)
  })

  return keys.join('')
};

