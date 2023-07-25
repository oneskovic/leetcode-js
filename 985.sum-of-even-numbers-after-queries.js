/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(A, queries) {
  const res = []
  for(let i = 0; i < queries.length; i++) {
    A[queries[i][1]] += queries[i][0]
    res.push(sum(A))
  }
  return res
};

function sum(arr) {
  return arr.reduce((ac, el) => ac + (el % 2 === 0 ? el : 0), 0)
}

