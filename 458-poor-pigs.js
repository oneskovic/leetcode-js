/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = function(buckets, minutesToDie, minutesToTest) {
  const index = Math.ceil(minutesToTest / minutesToDie) + 1
  return Math.ceil(Math.log(buckets) / Math.log(index))
}

