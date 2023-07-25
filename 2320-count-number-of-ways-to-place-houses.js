/**
 * @param {number} n
 * @return {number}
 */
const countHousePlacements = function(n) {
  const mod = BigInt(1e9 + 7)
  let house = 1n, space = 1n, total = 2n
  for(let i = 2; i <= n; i++) {
    house = space
    space = total
    total = (house + space) % mod
  }
  
  return total * total % mod
};

