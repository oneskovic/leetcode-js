/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
const rearrangeBarcodes = function(barcodes) {
  const hash = {}
  let maxFreq = 0, max = 0
  for(const e of barcodes) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
    if(hash[e] > maxFreq) {
        maxFreq = hash[e]
        max = e
    }
  }
  const n = barcodes.length
  const entries = Object.entries(hash)
  const res = Array(n)
  let idx = 0
  while(maxFreq) {
      res[idx] = max
      idx += 2
      maxFreq--
  }
  for(let [v, f] of entries) {
     if(+v === max) continue
     while(f) {
         if(idx >= n) idx = 1
         res[idx] = +v
         idx += 2
         f--
     }
  }
  
  return res
};

