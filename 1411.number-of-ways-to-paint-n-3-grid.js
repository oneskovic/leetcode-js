/**
 * @param {number} n
 * @return {number}
 */
const numOfWays = function(n) {
  const mod = 1e9 + 7
  let colors3 = 6, colors2 = 6
  
  for(let i = 1; i < n; i++) {
    const colors3Tmp = colors3
    colors3 = (2 * colors3 + 2 * colors2) % mod
    colors2 = (2 * colors3Tmp + 3 * colors2) % mod
  }
  
  
  return (colors2 + colors3) % mod
};

