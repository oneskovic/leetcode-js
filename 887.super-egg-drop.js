/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */

const superEggDrop = function(K, N) {
  let lo = 1,
    hi = N,
    mi
  while (lo < hi) {
    mi = ((lo + hi) / 2) >> 0
    if (f(mi, K, N) < N) lo = mi + 1
    else hi = mi
  }
  return lo
}

function f(x, K, N) {
  let ans = 0,
    r = 1,
    i = 1
  for (let i = 1; i <= K; ++i) {
    r = ((r * (x - i + 1)) / i) >> 0
    ans += r
    if (ans >= N) break
  }
  return ans
}

