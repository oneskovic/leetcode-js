/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function(n) {
  if(n === 0) return 1
  let res = 10
  let uniqueDigits = 9, avail = 9
  while(n > 1 && avail) {
    uniqueDigits = uniqueDigits * avail
    res += uniqueDigits
    avail--
    n--
  }
  
  return res
};

