/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
  let x = 0, y = 0
  const arr = Array(10).fill(0)
  for(let i = 0; i < guess.length; i++) {
    const ch = guess[i], e = secret[i]
    if(secret[i] === ch) {
      x++
    } else {
      if(arr[+ch] < 0) y++
      if(arr[+e] > 0) y++
      arr[+ch]++
      arr[+e]--      
    }
  }

  return `${x}A${y}B`
};

