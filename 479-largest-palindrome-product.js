/**
 * @param {number} n
 * @return {number}
 */
function largestPalindrome(n) {
  if(n === 1) return 9
  let max = BigInt(10 ** n - 1), min = max / 10n + 1n
  for(let h = max; h >= min; h--) {
    let left = h, right = 0n
    for(let i = h; i !== 0n; ) {
      right = right * 10n + i % 10n
      i = i / 10n
      left *= 10n
    }
    let pal = left + right
    for(let i = max; i >= min; i--) {
      let j = pal / i
      if(j > i) break
      if(pal % i === 0n) return pal % 1337n
    }
  }
}

