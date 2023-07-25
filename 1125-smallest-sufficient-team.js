/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
const smallestSufficientTeam = function (req_skills, people) {
  const m = req_skills.length,
    n = people.length,
    limit = 1 << m
  const skillIdxMap = {}
  for(let i = 0; i < m; i++) {
    skillIdxMap[req_skills[i]] = i
  }
  const dp = Array(limit)

  dp[0] = []
  
  for(let i = 0; i < n; i++) {
    let skillMask = 0
    for(let j = 0; j < people[i].length; j++) {
      skillMask |= (1 << skillIdxMap[people[i][j]])
    }

    for(let j = 0; j < dp.length; j++) {
      if(dp[j] == null) continue
      const prev = j
      const comb = prev | skillMask

      if(dp[comb] == null || dp[comb].length > dp[prev].length + 1) {

        dp[comb] = dp[prev].slice()
        dp[comb].push(i)
      }
    }
  }

  return dp[limit - 1]
}

