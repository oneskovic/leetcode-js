/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    let res = 0
    for(let i = 0, n = calories.length, tmp = 0; i < n; i++) {
      tmp += calories[i]
      if(i >= k - 1) {
        if(i >= k) {
          tmp -= calories[i - k]
        }
        if(tmp < lower) res--
        else if(tmp > upper) res++
      }

    }
    return res
};

