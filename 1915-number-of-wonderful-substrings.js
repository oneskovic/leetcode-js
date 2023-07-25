/**
 * @param {string} word
 * @return {number}
 */
const wonderfulSubstrings = (word) => {
  let res = 0, count = Array(1024).fill(0);
  let cur = 0;
  count[0] = 1;
  for (let i = 0; i < word.length; ++i) {
    const num = word[i].charCodeAt() - 97;
    cur ^= 1 << (num);
    res += count[cur];
    ++count[cur];
    
    for (let j = 0; j < 10; ++j) {
      res += count[cur ^ (1 << j)];
    }
  }
  
  return res;
};

