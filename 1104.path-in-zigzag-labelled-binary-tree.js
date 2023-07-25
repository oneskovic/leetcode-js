/**
 * @param {number} label
 * @return {number[]}
 */
const pathInZigZagTree = function(label) {
  const res = [], { log2, floor, ceil } = Math
  const level = floor(log2(label))
  let compl = 2 ** (level + 1) - 1 + 2 ** level - label
  
  while(label) {
    res.push(label)
    label = floor(label / 2)
    compl = floor(compl / 2)
    ;[label, compl] = [compl, label]
  }
  
  res.reverse()
  
  return res
};

