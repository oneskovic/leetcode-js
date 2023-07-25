/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
  const stk = [], n = asteroids.length, {abs} = Math
  for(const e of asteroids) {
    while(stk.length && stk.at(-1) > 0 && e < 0 && -e > stk.at(-1)) {
      stk.pop()
    }
    if(stk.length && stk.at(-1) > 0 && e < 0 && -e === stk.at(-1)) {
      stk.pop()
    }else if(stk.length && stk.at(-1) > 0 && e < 0 && -e < stk.at(-1)) {
      
    }else stk.push(e)
  }
  return stk
};

