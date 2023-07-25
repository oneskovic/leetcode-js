/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = function(encoded) {
  const n = encoded.length + 1
  let xor = 0
  for(let i = 1; i <= n; i++) xor ^= i
  for(let i = 1; i < n - 1; i += 2) xor ^= encoded[i]
  const res = [xor]
  let pre = xor
  for(let i = 0; i < n - 1; i++) {
    res.push(encoded[i] ^ pre)
    pre = res[res.length - 1]
  }
  
  return res
};

