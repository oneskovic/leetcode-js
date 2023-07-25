/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = function(bookings, n) {
  const arr = Array(n + 2).fill(0)
  for(const [s, e, num] of bookings) {
    arr[s] += num
    arr[e + 1] -= num
  }
  for(let i = 1; i < n + 2; i++) {
    arr[i] += arr[i - 1]
  }
  arr.pop()
  arr.shift()
  return arr
};

