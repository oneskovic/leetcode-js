/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeSum = function(nums) {
  let s1 = Infinity, s2 = Infinity, s3 = Infinity
  let l1 = -1, l2 = -1, l3 = -1
  const { max, min } = Math
  // s1, s2, s3, ..., l3, l2, l1
  for(const e of nums) {
    if(s1 > e) {
      s3 = s2;
      s2 = s1;
      s1 = e;
    } else if(s2 > e) {
      s3 = s2
      s2 = e
    } else if(s3 > e) {
      s3 = e
    }
    
    if(e > l1) {
      l3 = l2
      l2 = l1
      l1 = e
    } else if(e > l2) {
      l3 = l2
      l2 = e
    } else if(e > l3) {
      l3 = e
    }
  }
  
  return min(l1 - s3,  l2 - s2, l3 - s1)
};

