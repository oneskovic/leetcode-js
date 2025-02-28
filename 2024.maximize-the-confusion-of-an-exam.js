/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
const maxConsecutiveAnswers = function(answerKey, k) {
  const helper = (str, transT) => {
    let res = 0, l = 0, r = 0, num = 0
    const n = str.length
    const target = transT === 1 ? 'T' : 'F'
    while(r < n) {
      if(str[r] === target) num++
      while(num > k) {
        if(str[l] === target) num--
        l++
      }
      res = Math.max(res, r - l + 1)
      r++
    }
    return res
  }
  
  return Math.max(helper(answerKey, 0), helper(answerKey, 1))
};

