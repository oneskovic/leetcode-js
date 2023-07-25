/**
 * @param {number} n
 * @return {number}
 */
const primePalindrome = function(n) {
  if(n >= 8 && n <= 11) return 11
  const rev = str => str.split('').reverse().join('')
  for (let i = 1; i < 1e5; i++) {
    let left = `${i}`, right = rev(left).slice(1)
    let num = +(left + right)
    if (num >= n && isPrime(num)) return num
  }
  return -1

  function isPrime(num) {
    if(num < 2 || num % 2 === 0) return num === 2
    for(let i = 3; i * i <= num; i += 2) {
      if(num % i === 0) return false
    }
    return true
  }
};

