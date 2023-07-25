/**
 * @param {number[][]} cars
 * @return {number[]}
 */
const getCollisionTimes = function(cars) {
  const n = cars.length;
  const stack = [];
  const res = Array(n)
  for(let i = n - 1; i >= 0; i--) {
    const [p, s] = cars[i]
    res[i] = -1
    while(stack.length) {
      const j = stack[stack.length - 1]
      const [p2, s2] = cars[j]
      if(s2 >= s || res[j] > 0 && (p2 - p) / (s - s2) >= res[j]) stack.pop()
      else break
    }
    if(stack.length) {
      const j = stack[stack.length - 1]
      const [p2, s2] = cars[j]
      res[i] = (p2 - p) / (s - s2)
    }
    stack.push(i)
  }
  
  return res
};

