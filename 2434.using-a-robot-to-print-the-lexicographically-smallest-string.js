/**
 * @param {string} s
 * @return {string}
 */
const robotWithString = function (s) {
  const stk = []
  const freq = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for (const ch of s) {
    freq[ch.charCodeAt(0) - a]++
  }

  let res = ''

  for (const ch of s) {
    stk.push(ch)
    freq[ch.charCodeAt(0) - a]--
    while (stk.length && stk[stk.length - 1] <= helper(freq)) {
      const e = stk.pop()
      res += e
    }
  }

  while (stk.length) {
    res += stk.pop()
  }

  return res

  function helper(arr) {
    const a = 'a'.charCodeAt(0)
    for (let i = 0; i < 26; i++) {
      if (arr[i] !== 0) return String.fromCharCode(a + i)
    }

    return ''
  }
}


