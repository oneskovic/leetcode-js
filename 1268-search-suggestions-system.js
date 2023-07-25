/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function(products, searchWord) {
  products.sort()
  let res = [], left = 0, right = products.length - 1
  for (let i = 0; i < searchWord.length; i++) {
    let c = searchWord.charAt(i), tmp = []
    while (products[left]?.charAt(i) < c) left++
    while (products[right]?.charAt(i) > c) right--
    for (let j = 0; j < 3 && left + j <= right; j++) tmp.push(products[left+j])
    res.push(tmp)
  }
  return res
};

