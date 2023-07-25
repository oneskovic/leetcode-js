/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
const minimumLines = function(stockPrices) {
  let res = 1
  const n = stockPrices.length
  if(n === 1) return 0
  stockPrices.sort((a, b) => a[0] - b[0])
  for(let i = 2; i < n; i++) {
    const cur = stockPrices[i], p = stockPrices[i - 1], pp = stockPrices[i - 2]
    if(chk(pp, p, cur)) continue
    else res++
  }
  
  
  return res
};

function chk(p1, p2, p3) {
  const bi = BigInt
  // (y3 - y1) / (x3 - x1) == (y2 - y1) / (x2 - x1)
  const [x1, y1] =  p1, [x2, y2] = p2, [x3, y3] = p3
  return (bi(y3) - bi(y1)) * (bi(x2) - bi(x1)) === (bi(y2) - bi(y1)) * (bi(x3) - bi(x1))
}



