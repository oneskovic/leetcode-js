/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  const stk = []
  let op = '+', num = 0
  s = s.trim()
  const isDigit = ch => ch >= '0' && ch <= '9'
  for(let i = 0, n = s.length; i < n; i++) {
    const ch = s[i]
    if(ch === ' ') continue
    if(isDigit(ch)) {
      num = (+num) * 10 + (+ch)
    } 
    if(!isDigit(ch) || i === n - 1) {
      if(op === '-') stk.push(-num)
      else if(op === '+') stk.push(num)
      else if(op === '*') stk.push(stk.pop() * num)
      else if(op === '/') stk.push(~~(stk.pop() / num))
      
      op = ch
      num = 0
    }
  }
  let res = 0  
  for(const e of stk) res += e

  return res
};

