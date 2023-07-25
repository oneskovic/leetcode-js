/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function (s) {
  const freq = Array(26).fill(0)
  const a = 'a'.charCodeAt(0), n = s.length
  for(const e of s) {
    freq[e.charCodeAt(0) - a]++
  }
  let max = 0, maxIdx = 0
  for(let i = 0; i < 26; i++) {
    if(freq[i] > max) {
      max = freq[i]
      maxIdx = i
    }
  }

  if(max > (n + 1) / 2) return ''

  const res = Array(n)

  let idx = 0
  while(freq[maxIdx]) {
    res[idx] = String.fromCharCode(a + maxIdx)
    idx += 2
    freq[maxIdx]--
  }

  for(let i = 0; i < 26; i++) {
    while(freq[i]) {
      if(idx >= n) idx = 1
      res[idx] = String.fromCharCode(i + a)
      idx += 2
      freq[i]--
    }
  }

  return res.join('')
}

