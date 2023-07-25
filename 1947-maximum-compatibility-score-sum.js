/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
const maxCompatibilitySum = function(students, mentors) {
  const m = students.length, n = students[0].length
  const limit = 1 << m
  const dp = Array(limit).fill(0)
  for(let mask = 1; mask < limit; mask++) {
    for(let i = 0; i < m; i++) {
      if(mask & (1 << i)) {
        dp[mask] = Math.max(
          dp[mask],
          dp[mask ^ (1 << i)] + calc(bitCnt(mask) - 1, i)
        )
      }
    }
  }
  
  
  return dp[limit - 1]
    
  function bitCnt(num) {
    let res = 0
    while(num) {
      num = num & (num - 1)
      res++
    }
    
    return res
  }
  // student, mentor
  function calc(i, j) {
    let res = 0
    for(let k = 0; k < n; k++) {
      if(students[i][k] === mentors[j][k]) {
        res++
      }
    }
    
    return res
  }
};

