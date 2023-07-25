/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = function(intervals) {
  let highest = Number.NEGATIVE_INFINITY;
  let secondHighest = Number.NEGATIVE_INFINITY;
  return intervals
      .sort((a, b) => a[1] - b[1])
      .reduce((sum, interval) => {
      if (interval[0] > secondHighest) {
          secondHighest = interval[1];
          highest = interval[1] - 1;
          return sum + 2;
      }
      else if (interval[0] > highest) {
          highest = secondHighest;
          secondHighest = interval[1];
          return sum + 1;
      }
      return sum;
  }, 0);
};

