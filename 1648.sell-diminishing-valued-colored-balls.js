/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
const maxProfit = function(inventory, orders) {
  const bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m);
  inventory = inventory.map(e => BigInt(e))
  orders = BigInt(orders)
  let l = 0n, r = bigIntMax(...inventory)
  while(l < r) {
    const mid = l + (r - l) / 2n
    if(valid(mid)) l = mid + 1n
    else r = mid
  }
  
  // console.log(l)
  const mod = BigInt(1e9 + 7)
  let t = l, res = 0n, cnt = 0n
  for(const e of inventory) {
    if(e <= t) continue
    cnt += e - t
    res = (res + (t + 1n + e) * (e - t) / 2n) % mod
  }
  
  res = (res + (orders - cnt) * t) % mod
  
  return res
  
  function valid(mid) {
    let res = 0n
    for(const e of inventory) {
      if(e > mid) res += e - mid
    }
    return res > orders
  }
};

