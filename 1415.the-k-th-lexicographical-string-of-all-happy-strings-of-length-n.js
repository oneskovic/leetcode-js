/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getHappyString = function(n, k) {
  const hash = {a: 'bc', b: 'ac', c: 'ab'}
  const q = ['a', 'b', 'c']
  while(q[0].length !== n) {
    const e = q.shift()
    const last = e.charAt(e.length - 1)
    for(const ch of hash[last]) {
      q.push(e + ch)
    }
  }
  if(q.length >= k && q[k - 1].length === n) {
     return q[k - 1]
  }
     
  return ''
};

