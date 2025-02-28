/**
 * @param {string} s
 * @return {number}
 */
const maxUniqueSplit = function(s) {
  return bt(s, '', 0, new Set())
};

function bt(str, cur, idx, useds) {
  if(idx === str.length) return useds.size
  cur += str[idx]
  if(useds.has(cur)) return bt(str, cur, idx +1, useds)
  else {
    let ans = 0
    useds.add(cur)
    ans = Math.max(ans, bt(str, '', idx+1, useds))
    useds.delete(cur)
    ans = Math.max(ans, bt(str, cur, idx+1, useds))
    return ans
  }
}

